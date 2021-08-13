namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Messages.Models;
    using OfficeBoard.Server.Infrastructure.Extensions;

    [Authorize]
    public class MessagesController : ApiController
    {
        private readonly IMessageService messageService;

        public MessagesController(IMessageService messagesService)
            => this.messageService = messagesService;

        [HttpGet]
        public async Task<IEnumerable<MessageListingServiceModel>> Mine()
        {
            var userId = this.User.GetId();

            return await this.messageService.GetAllByUser(userId);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<MessageDetailsServiceModel>> Details(int id)
            => await this.messageService.GetById(id);

        [HttpPost]
        public async Task<ActionResult<int>> Create(MessageCreateRequestModel model)
        {
            var userId = this.User.GetId();

            var messageId = await this.messageService.Create(
                model.Title,
                model.Content,
                model.ImageUrl,
                userId);

            return this.Created(nameof(this.Create), messageId);
        }

        [HttpPut]
        public async Task<ActionResult> Update(MessageUpdateRequestModel model)
        {
            var userId = this.User.GetId();

            var updated = await this.messageService.Update(
                model.Id,
                model.Title,
                model.Content,
                model.ImageUrl,
                userId);

            if (!updated)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }
    }
}
