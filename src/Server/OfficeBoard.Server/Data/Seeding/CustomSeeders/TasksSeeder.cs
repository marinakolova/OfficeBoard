namespace OfficeBoard.Server.Data.Seeding.CustomSeeders
{
    using System;
    using System.Linq;

    using OfficeBoard.Server.Data.Models;

    public class TasksSeeder : ISeeder
    {
        public async System.Threading.Tasks.Task SeedAsync(OfficeBoardDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext.Tasks.Any())
            {
                return;
            }

            var tasks = new Task[]
            {
                new Task
                {
                    Title = "Lorem ipsum dolor sit amet",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)0,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "consectetur adipiscing elit",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)0,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "sed do eiusmod tempor incididunt",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)0,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "ut labore et dolore magna aliqua",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)1,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "Ut enim ad minim veniam",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)1,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "quis nostrud exercitation ullamco laboris",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)2,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "nisi ut aliquip ex ea commodo consequat",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)2,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "Duis aute irure dolor in reprehenderit",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)2,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "in voluptate velit esse cillum",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)2,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
                new Task
                {
                    Title = "dolore eu fugiat nulla pariatur",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Status = (TaskStatus)2,
                    UserId = dbContext.Users.FirstOrDefault().Id,
                },
            };

            await dbContext.AddRangeAsync(tasks);
            await dbContext.SaveChangesAsync();
        }
    }
}
