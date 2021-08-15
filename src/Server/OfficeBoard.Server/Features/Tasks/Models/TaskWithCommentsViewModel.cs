namespace OfficeBoard.Server.Features.Tasks.Models
{
    using System.Collections.Generic;

    using OfficeBoard.Server.Features.Comments.Models;

    public class TaskWithCommentsViewModel : TaskViewModel
    {
        public IEnumerable<CommentViewModel> Comments { get; set; }
    }
}
