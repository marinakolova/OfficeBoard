namespace OfficeBoard.Server.Controllers
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Data.Models;
    using OfficeBoard.Server.Infrastructure;
    using OfficeBoard.Server.Models.Messages;

    public class MessagesController : ApiController
    {
        private readonly OfficeBoardDbContext data;

        public MessagesController(OfficeBoardDbContext data) => this.data = data;

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateMessageRequestModel model)
        {
            var userId = this.User.GetId();

            var message = new Message
            {
                Title = model.Title,
                Content = model.Content,
                ImageUrl = model.ImageUrl,
                UserId = userId,
            };

            this.data.Add(message);

            await this.data.SaveChangesAsync();

            return this.Created(nameof(this.Create), message.Id);
        }
    }
}
