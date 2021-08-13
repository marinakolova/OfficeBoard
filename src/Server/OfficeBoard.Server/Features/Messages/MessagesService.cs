namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.EntityFrameworkCore;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Data.Models;

    public class MessagesService : IMessagesService
    {
        private readonly OfficeBoardDbContext data;

        public MessagesService(OfficeBoardDbContext data)
            => this.data = data;

        public async Task<int> Create(string title, string content, string imageUrl, string userId)
        {
            var message = new Message
            {
                Title = title,
                Content = content,
                ImageUrl = imageUrl,
                UserId = userId,
            };

            this.data.Add(message);

            await this.data.SaveChangesAsync();

            return message.Id;
        }

        public async Task<IEnumerable<MessageListingResponseModel>> GetAllByUser(string userId)
             => await this.data
                    .Messages
                    .Where(x => x.UserId == userId)
                    .Select(x => new MessageListingResponseModel
                    {
                        Id = x.Id,
                        Title = x.Title,
                        UserName = x.User.UserName,
                    })
                    .ToListAsync();
    }
}
