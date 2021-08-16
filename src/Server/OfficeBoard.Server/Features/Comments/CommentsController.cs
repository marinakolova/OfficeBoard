namespace OfficeBoard.Server.Features.Comments
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Comments.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    using static OfficeBoard.Server.Infrastructure.WebConstants;

    [Authorize]
    public class CommentsController : ApiController
    {
        private readonly ICommentService commentService;
        private readonly ICurrentUserService currentUserService;

        public CommentsController(
            ICommentService commentsService,
            ICurrentUserService currentUserService)
        {
            this.commentService = commentsService;
            this.currentUserService = currentUserService;
        }

        [HttpGet]
        [Route("byTask/{taskId}")]
        public async Task<IEnumerable<CommentViewModel>> ByTask(int taskId)
        {
            return await this.commentService.GetAllByTask(taskId);
        }

        [HttpGet]
        [Route(Id)]
        public async Task<ActionResult<CommentViewModel>> Details(int id)
            => await this.commentService.GetById(id);

        [HttpPost]
        public async Task<ActionResult<int>> Create(CommentCreateRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var commentId = await this.commentService.Create(
                model.Content,
                model.TaskId,
                userId);

            return this.Created(nameof(this.Create), commentId);
        }

        [HttpPut]
        public async Task<ActionResult> Update(CommentUpdateRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var updated = await this.commentService.Update(
                model.Id,
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

            var deleted = await this.commentService.Delete(id, userId);

            if (!deleted)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }
    }
}
