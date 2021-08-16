namespace OfficeBoard.Server.Features.Tasks.Models
{
    using System;

    public class TaskViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Status { get; set; }

        public DateTime CreatedOn { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }

        public int CommentsCount { get; set; }
    }
}
