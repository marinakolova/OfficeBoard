namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Messages.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    using static OfficeBoard.Server.Infrastructure.WebConstants;

    [Authorize]
    public class MessagesController : ApiController
    {
        private readonly IMessageService messageService;
        private readonly ICurrentUserService currentUserService;

        public MessagesController(
            IMessageService messagesService,
            ICurrentUserService currentUserService)
        {
            this.messageService = messagesService;
            this.currentUserService = currentUserService;
        }

        [HttpGet]
        public async Task<IEnumerable<MessageViewModel>> All()
        {
            return await this.messageService.GetAll();
        }

        [HttpGet]
        [Route("user/{username}")]
        public async Task<IEnumerable<MessageViewModel>> ByUser(string username)
        {
            return await this.messageService.GetAllByUsername(username);
        }

        [HttpGet]
        [Route(Id)]
        public async Task<ActionResult<MessageViewModel>> Details(int id)
            => await this.messageService.GetById(id);

        [HttpPost]
        public async Task<ActionResult<int>> Create(MessageCreateRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var messageId = await this.messageService.Create(
                model.Title,
                model.Content,
                userId);

            return this.Created(nameof(this.Create), messageId);
        }

        [HttpPut]
        public async Task<ActionResult> Update(MessageUpdateRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var updated = await this.messageService.Update(
                model.Id,
                model.Title,
                model.Content,
                userId);

            if (!updated)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }

        [HttpDelete]
        [Route(Id)]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.currentUserService.GetId();

            var deleted = await this.messageService.Delete(id, userId);

            if (!deleted)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }
    }
}
