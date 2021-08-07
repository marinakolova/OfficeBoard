namespace OfficeBoard.Server.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using OfficeBoard.Server.Data.Models;

    public class OfficeBoardDbContext : IdentityDbContext<User>
    {
        public OfficeBoardDbContext(DbContextOptions<OfficeBoardDbContext> options)
            : base(options)
        {
        }
    }
}
