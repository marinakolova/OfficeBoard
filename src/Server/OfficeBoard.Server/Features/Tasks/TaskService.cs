namespace OfficeBoard.Server.Features.Tasks
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.EntityFrameworkCore;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Features.Tasks.Models;

    public class TaskService : ITaskService
    {
        private readonly OfficeBoardDbContext data;

        public TaskService(OfficeBoardDbContext data)
            => this.data = data;

        public async Task<int> Create(string title, string description, string userId)
        {
            var task = new Data.Models.Task
            {
                Title = title,
                Description = description,
                Status = Data.Models.TaskStatus.ToDo,
                UserId = userId,
            };

            this.data.Add(task);
            await this.data.SaveChangesAsync();

            return task.Id;
        }

        public async Task<bool> Update(int id, string title, string description, int status, string userId)
        {
            var task = await this.GetTaskByIdAndUserId(id, userId);

            if (task == null)
            {
                return false;
            }

            task.Title = title;
            task.Description = description;
            task.Status = (Data.Models.TaskStatus)status;

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<bool> ChangeStatus(int id, int status, string userId)
        {
            var task = await this.data
                .Tasks
                .Where(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (task == null)
            {
                return false;
            }

            task.Status = (Data.Models.TaskStatus)status;

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Delete(int id, string userId)
        {
            var task = await this.GetTaskByIdAndUserId(id, userId);

            if (task == null)
            {
                return false;
            }

            this.data.Tasks.Remove(task);
            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<int> GetCount()
            => await this.data
                .Tasks
                .CountAsync();

        public async Task<int> GetTodayCount()
            => await this.data
                .Tasks
                .Where(x => x.CreatedOn.Date == DateTime.UtcNow.Date)
                .CountAsync();

        public async Task<int> GetMonthCount()
            => await this.data
                .Tasks
                .Where(x => x.CreatedOn.Month == DateTime.UtcNow.Month)
                .CountAsync();

        public async Task<IEnumerable<TaskViewModel>> GetAll()
            => await this.data
                .Tasks
                .Select(x => new TaskViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Description = x.Description,
                    Status = (int)x.Status,
                    CreatedOn = x.CreatedOn,
                    ModifiedOn = x.ModifiedOn,
                    UserId = x.UserId,
                    UserName = x.User.UserName,
                    CommentsCount = x.Comments.Count(),
                })
                .OrderByDescending(x => x.CreatedOn)
                .ToListAsync();

        public async Task<IEnumerable<TaskViewModel>> GetAllByUser(string userId)
            => await this.data
                .Tasks
                .Where(x => x.UserId == userId)
                .Select(x => new TaskViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Description = x.Description,
                    Status = (int)x.Status,
                    CreatedOn = x.CreatedOn,
                    ModifiedOn = x.ModifiedOn,
                    UserId = userId,
                    UserName = x.User.UserName,
                    CommentsCount = x.Comments.Count(),
                })
                .OrderByDescending(x => x.CreatedOn)
                .ToListAsync();

        public async Task<TaskWithCommentsViewModel> GetById(int id)
            => await this.data
                .Tasks
                .Where(x => x.Id == id)
                .Select(x => new TaskWithCommentsViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Description = x.Description,
                    Status = (int)x.Status,
                    CreatedOn = x.CreatedOn,
                    UserId = x.UserId,
                    UserName = x.User.UserName,
                    CommentsCount = x.Comments.Count(),
                })
                .FirstOrDefaultAsync();

        private async Task<Data.Models.Task> GetTaskByIdAndUserId(int id, string userId)
            => await this.data
                .Tasks
                .Where(x => x.Id == id && x.UserId == userId)
                .FirstOrDefaultAsync();
    }
}
