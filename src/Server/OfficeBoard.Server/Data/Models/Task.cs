namespace OfficeBoard.Server.Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    using OfficeBoard.Server.Data.Models.Base;

    using static OfficeBoard.Server.Data.Validation.Task;

    public class Task : DeletableEntity
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(MaxTtileLength)]
        public string Title { get; set; }

        [Required]
        [MaxLength(MaxDescriptionLength)]
        public string Description { get; set; }

        public TaskStatus Status { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }

        public IEnumerable<Comment> Comments { get; } = new HashSet<Comment>();
    }
}
