namespace OfficeBoard.Server.Features.Tasks
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Comments;
    using OfficeBoard.Server.Features.Tasks.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    using static OfficeBoard.Server.Infrastructure.WebConstants;

    [Authorize]
    public class TasksController : ApiController
    {
        private readonly ITaskService taskService;
        private readonly ICommentService commentService;
        private readonly ICurrentUserService currentUserService;

        public TasksController(
            ITaskService tasksService,
            ICommentService commentService,
            ICurrentUserService currentUserService)
        {
            this.taskService = tasksService;
            this.commentService = commentService;
            this.currentUserService = currentUserService;
        }

        [HttpGet]
        public async Task<IEnumerable<TaskViewModel>> All()
        {
            return await this.taskService.GetAll();
        }

        [HttpGet]
        [Route(Id)]
        public async Task<ActionResult<TaskWithCommentsViewModel>> Details(int id)
        {
            var taskWithComments = await this.taskService.GetById(id);
            taskWithComments.Comments = await this.commentService.GetAllByTask(id);

            return taskWithComments;
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(TaskCreateRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var taskId = await this.taskService.Create(
                model.Title,
                model.Description,
                userId);

            return this.Created(nameof(this.Create), taskId);
        }

        [HttpPut]
        public async Task<ActionResult> Update(TaskUpdateRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var updated = await this.taskService.Update(
                model.Id,
                model.Title,
                model.Description,
                model.Status,
                userId);

            if (!updated)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }

        [HttpPatch]
        public async Task<ActionResult> ChangeStatus(TaskChangeStatusRequestModel model)
        {
            var userId = this.currentUserService.GetId();

            var updated = await this.taskService.ChangeStatus(
                model.Id,
                model.Status,
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

            var deleted = await this.taskService.Delete(id, userId);

            if (!deleted)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }
    }
}
