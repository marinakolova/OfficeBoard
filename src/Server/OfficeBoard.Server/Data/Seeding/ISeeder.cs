namespace OfficeBoard.Server.Data.Seeding
{
    using System;
    using System.Threading.Tasks;

    public interface ISeeder
    {
        Task SeedAsync(OfficeBoardDbContext dbContext, IServiceProvider serviceProvider);
    }
}
