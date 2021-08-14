namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Messages.Models;

    public interface IMessageService
    {
        Task<int> Create(string title, string content, string imageUrl, string userId);

        Task<bool> Update(int id, string title, string content, string imageUrl, string userId);

        Task<bool> Delete(int id, string userId);

        Task<IEnumerable<MessageDetailsServiceModel>> GetAll();

        Task<IEnumerable<MessageDetailsServiceModel>> GetAllByUser(string userId);

        Task<MessageDetailsServiceModel> GetById(int id);
    }
}
