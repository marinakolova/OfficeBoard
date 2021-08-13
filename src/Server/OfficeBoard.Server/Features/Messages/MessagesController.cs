namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Infrastructure;

    public class MessagesController : ApiController
    {
        private readonly IMessagesService messagesService;

        public MessagesController(IMessagesService messagesService)
            => this.messagesService = messagesService;

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<MessageListingResponseModel>> Mine()
        {
            var userId = this.User.GetId();

            return await this.messagesService.GetAllByUser(userId);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateMessageRequestModel model)
        {
            var userId = this.User.GetId();

            var messageId = await this.messagesService.Create(
                model.Title,
                model.Content,
                model.ImageUrl,
                userId);

            return this.Created(nameof(this.Create), messageId);
        }
    }
}
