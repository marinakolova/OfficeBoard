namespace OfficeBoard.Server.Features.Messages.Models
{
    using System;

    public class MessageViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime CreatedOn { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }
    }
}
