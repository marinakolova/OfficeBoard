namespace OfficeBoard.Server.Features.Messages
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.Message;

    public class CreateMessageRequestModel
    {
        [Required]
        [MaxLength(MaxTtileLength)]
        public string Title { get; set; }

        [Required]
        [MaxLength(MaxContentLength)]
        public string Content { get; set; }

        public string ImageUrl { get; set; }
    }
}
