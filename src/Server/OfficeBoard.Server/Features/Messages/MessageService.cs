namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.EntityFrameworkCore;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Data.Models;
    using OfficeBoard.Server.Features.Messages.Models;

    public class MessageService : IMessageService
    {
        private readonly OfficeBoardDbContext data;

        public MessageService(OfficeBoardDbContext data)
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

        public async Task<IEnumerable<MessageListingModel>> GetAllByUser(string userId)
            => await this.data
                    .Messages
                    .Where(x => x.UserId == userId)
                    .Select(x => new MessageListingModel
                    {
                        Id = x.Id,
                        Title = x.Title,
                        UserId = userId,
                        UserName = x.User.UserName,
                    })
                    .ToListAsync();

        public async Task<MessageDetailsModel> GetById(int id)
            => await this.data
                    .Messages
                    .Where(x => x.Id == id)
                    .Select(x => new MessageDetailsModel
                    {
                        Id = x.Id,
                        Title = x.Title,
                        Content = x.Content,
                        ImageUrl = x.ImageUrl,
                        UserId = x.UserId,
                        UserName = x.User.UserName,
                    })
                    .FirstOrDefaultAsync();
    }
}
