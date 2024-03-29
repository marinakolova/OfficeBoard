﻿namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Messages.Models;

    public interface IMessageService
    {
        Task<int> GetTodayCount();

        Task<int> GetMonthCount();

        Task<int> GetYearCount();

        Task<IEnumerable<MessageResponseModel>> GetAll();

        Task<MessageResponseModel> GetById(int id);

        Task<int> Create(string title, string content, string userId);

        Task<bool> Update(int id, string title, string content, string userId);

        Task<bool> Delete(int id, string userId);
    }
}
