namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Messages.Models;

    public interface IMessageService
    {
        public Task<int> Create(string title, string content, string imageUrl, string userId);

        public Task<bool> Update(int id, string title, string content, string imageUrl, string userId);

        public Task<bool> Delete(int id, string userId);

        public Task<IEnumerable<MessageListingServiceModel>> GetAllByUser(string userId);

        public Task<MessageDetailsServiceModel> GetById(int id);
    }
}
