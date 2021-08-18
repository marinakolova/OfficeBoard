namespace OfficeBoard.Server.Features.Comments.Models
{
    using System;

    public class CommentResponseModel
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public int TaskId { get; set; }

        public string TaskTitle { get; set; }

        public DateTime CreatedOn { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }
    }
}
