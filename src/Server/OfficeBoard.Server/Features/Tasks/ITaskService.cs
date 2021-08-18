namespace OfficeBoard.Server.Features.Tasks
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Tasks.Models;

    public interface ITaskService
    {
        Task<int> GetTodayCount();

        Task<int> GetMonthCount();

        Task<int> GetYearCount();

        Task<IEnumerable<TaskResponseModel>> GetAll();

        Task<TaskResponseModel> GetById(int id);

        Task<int> Create(string title, string description, string userId);

        Task<bool> Update(int id, string title, string description, int status, string userId);

        Task<bool> ChangeStatus(int id, int status);

        Task<bool> Delete(int id, string userId);
    }
}
