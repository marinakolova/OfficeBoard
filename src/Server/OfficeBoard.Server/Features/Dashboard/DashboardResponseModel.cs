namespace OfficeBoard.Server.Features.Dashboard
{
    public class DashboardResponseModel
    {
        public int TodayMessagesCount { get; set; }

        public int MonthMessagesCount { get; set; }

        public int YearMessagesCount { get; set; }

        public int TodayTasksCount { get; set; }

        public int MonthTasksCount { get; set; }

        public int YearTasksCount { get; set; }

        public int TodayCommentsCount { get; set; }

        public int MonthCommentsCount { get; set; }

        public int YearCommentsCount { get; set; }
    }
}
