namespace OfficeBoard.Server.Features.Messages.Models
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.Message;

    public class MessageCreateRequestModel
    {
        [Required]
        [MaxLength(MaxTtileLength)]
        public string Title { get; set; }

        [Required]
        [MaxLength(MaxContentLength)]
        public string Content { get; set; }
    }
}
