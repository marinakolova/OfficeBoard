﻿namespace OfficeBoard.Server.Features.Comments.Models
{
    using System;

    public class CommentViewModel
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public int TaskId { get; set; }

        public string TaskTitle { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }
    }
}
