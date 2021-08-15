namespace OfficeBoard.Server.Features.Dashboard
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Messages;
    using OfficeBoard.Server.Features.Tasks;

    public class DashboardController : ApiController
    {
        private readonly IMessageService messageService;
        private readonly ITaskService taskService;

        public DashboardController(IMessageService messageService, ITaskService taskService)
        {
            this.messageService = messageService;
            this.taskService = taskService;
        }

        [HttpGet]
        public async Task<DashboardViewModel> Dashboard()
        {
            return new DashboardViewModel
            {
                MessagesCount = await this.messageService.GetCount(),
                TodayMessagesCount = await this.messageService.GetTodayCount(),
                MonthMessagesCount = await this.messageService.GetMonthCount(),
                TasksCount = await this.taskService.GetCount(),
                TodayTasksCount = await this.taskService.GetTodayCount(),
                MonthTasksCount = await this.taskService.GetMonthCount(),
            };
        }
    }
}
