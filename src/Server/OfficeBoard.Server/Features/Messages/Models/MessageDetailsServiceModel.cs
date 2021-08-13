namespace OfficeBoard.Server.Features.Messages.Models
{
    public class MessageDetailsServiceModel : MessageListingServiceModel
    {
        public string Content { get; set; }

        public string ImageUrl { get; set; }
    }
}
