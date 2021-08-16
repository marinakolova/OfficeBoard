namespace OfficeBoard.Server.Features.Messages
{
    using System;
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

        public async Task<int> GetTodayCount()
            => await this.data
                .Messages
                .Where(x => x.CreatedOn.Date == DateTime.UtcNow.Date)
                .CountAsync();

        public async Task<int> GetMonthCount()
            => await this.data
                .Messages
                .Where(x => x.CreatedOn.Month == DateTime.UtcNow.Month)
                .CountAsync();

        public async Task<int> GetYearCount()
            => await this.data
                .Messages
                .Where(x => x.CreatedOn.Year == DateTime.UtcNow.Year)
                .CountAsync();

        public async Task<IEnumerable<MessageViewModel>> GetAll()
            => await this.data
                .Messages
                .Select(x => new MessageViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Content = x.Content,
                    CreatedOn = x.CreatedOn,
                    UserId = x.UserId,
                    UserName = x.User.UserName,
                })
                .OrderByDescending(x => x.CreatedOn)
                .ToListAsync();

        public async Task<IEnumerable<MessageViewModel>> GetAllByUsername(string username)
            => await this.data
                .Messages
                .Where(x => x.User.UserName == username)
                .Select(x => new MessageViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Content = x.Content,
                    CreatedOn = x.CreatedOn,
                    UserId = x.User.Id,
                    UserName = username,
                })
                .OrderByDescending(x => x.CreatedOn)
                .ToListAsync();

        public async Task<MessageViewModel> GetById(int id)
            => await this.data
                .Messages
                .Where(x => x.Id == id)
                .Select(x => new MessageViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Content = x.Content,
                    CreatedOn = x.CreatedOn,
                    UserId = x.UserId,
                    UserName = x.User.UserName,
                })
                .FirstOrDefaultAsync();

        public async Task<int> Create(string title, string content, string userId)
        {
            var message = new Message
            {
                Title = title,
                Content = content,
                UserId = userId,
            };

            this.data.Add(message);
            await this.data.SaveChangesAsync();

            return message.Id;
        }

        public async Task<bool> Update(int id, string title, string content, string userId)
        {
            var message = await this.GetMessageByIdAndUserId(id, userId);

            if (message == null)
            {
                return false;
            }

            message.Title = title;
            message.Content = content;

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Delete(int id, string userId)
        {
            var message = await this.GetMessageByIdAndUserId(id, userId);

            if (message == null)
            {
                return false;
            }

            this.data.Messages.Remove(message);
            await this.data.SaveChangesAsync();

            return true;
        }

        private async Task<Message> GetMessageByIdAndUserId(int id, string userId)
            => await this.data
                .Messages
                .Where(x => x.Id == id && x.UserId == userId)
                .FirstOrDefaultAsync();
    }
}
