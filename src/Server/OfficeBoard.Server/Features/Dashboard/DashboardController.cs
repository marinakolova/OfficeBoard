namespace OfficeBoard.Server.Features.Dashboard
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Comments;
    using OfficeBoard.Server.Features.Messages;
    using OfficeBoard.Server.Features.Tasks;

    public class DashboardController : ApiController
    {
        private readonly IMessageService messageService;
        private readonly ITaskService taskService;
        private readonly ICommentService commentService;

        public DashboardController(
            IMessageService messageService,
            ITaskService taskService,
            ICommentService commentService)
        {
            this.messageService = messageService;
            this.taskService = taskService;
            this.commentService = commentService;
        }

        [HttpGet]
        public async Task<DashboardViewModel> Dashboard()
        {
            return new DashboardViewModel
            {
                TodayMessagesCount = await this.messageService.GetTodayCount(),
                MonthMessagesCount = await this.messageService.GetMonthCount(),
                YearMessagesCount = await this.messageService.GetYearCount(),
                TodayTasksCount = await this.taskService.GetTodayCount(),
                MonthTasksCount = await this.taskService.GetMonthCount(),
                YearTasksCount = await this.taskService.GetYearCount(),
                TodayCommentsCount = await this.commentService.GetTodayCount(),
                MonthCommentsCount = await this.commentService.GetMonthCount(),
                YearCommentsCount = await this.commentService.GetYearCount(),
            };
        }
    }
}
