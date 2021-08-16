namespace OfficeBoard.Server.Infrastructure.Extensions
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Data.Seeding;

    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseSwaggerUI(this IApplicationBuilder app)
            => app
                .UseSwagger()
                .UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "My OfficeBoard API");
                    options.RoutePrefix = string.Empty;
                });

        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            // Seed data on application startup
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var dbContext = serviceScope.ServiceProvider.GetRequiredService<OfficeBoardDbContext>();

                dbContext.Database.Migrate();

                new OfficeBoardDbContextSeeder().SeedAsync(dbContext, serviceScope.ServiceProvider).GetAwaiter().GetResult();
            }
        }
    }
}
