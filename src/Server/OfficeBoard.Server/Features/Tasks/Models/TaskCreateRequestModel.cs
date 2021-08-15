namespace OfficeBoard.Server.Features.Tasks.Models
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.Task;

    public class TaskCreateRequestModel
    {
        [Required]
        [MaxLength(MaxTtileLength)]
        public string Title { get; set; }

        [Required]
        [MaxLength(MaxDescriptionLength)]
        public string Description { get; set; }

        public int Status { get; set; }
    }
}
