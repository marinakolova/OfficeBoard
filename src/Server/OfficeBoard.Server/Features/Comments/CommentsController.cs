namespace OfficeBoard.Server.Features.Comments
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Comments.Models;
    using OfficeBoard.Server.Infrastructure.Services;

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
    }
}
