namespace OfficeBoard.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using OfficeBoard.Server.Data.Models.Base;

    using static OfficeBoard.Server.Data.Validation.Comment;

    public class Comment : DeletableEntity
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(MaxContentLength)]
        public string Content { get; set; }

        public int TaskId { get; set; }

        public Task Task { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }
    }
}
