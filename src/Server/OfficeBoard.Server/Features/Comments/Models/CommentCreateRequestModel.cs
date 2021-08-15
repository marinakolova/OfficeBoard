namespace OfficeBoard.Server.Features.Comments.Models
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.Comment;

    public class CommentCreateRequestModel
    {
        [Required]
        [MaxLength(MaxContentLength)]
        public string Content { get; set; }

        public int TaskId { get; set; }
    }
}
