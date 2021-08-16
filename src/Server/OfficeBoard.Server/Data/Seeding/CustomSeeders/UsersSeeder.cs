namespace OfficeBoard.Server.Data.Seeding.CustomSeeders
{
    using System;

    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.DependencyInjection;
    using OfficeBoard.Server.Data.Models;

    public class UsersSeeder : ISeeder
    {
        public async System.Threading.Tasks.Task SeedAsync(OfficeBoardDbContext dbContext, IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

            // Create User
            await CreateUser(
                userManager,
                "user",
                "user@user.com",
                "123456");

            // Create User
            await CreateUser(
                userManager,
                "test",
                "test@test.com",
                "123456");
        }

        private static async System.Threading.Tasks.Task CreateUser(
            UserManager<User> userManager, string username, string email, string password)
        {
            var user = new User
            {
                UserName = username,
                Email = email,
            };

            await userManager.CreateAsync(user, password);
        }
    }
}
