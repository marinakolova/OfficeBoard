namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Messages.Models;

    public interface IMessageService
    {
        public Task<int> Create(string title, string content, string imageUrl, string userId);

        public Task<IEnumerable<MessageListingModel>> GetAllByUser(string userId);

        public Task<MessageDetailsModel> GetById(int id);
    }
}
