namespace OfficeBoard.Server.Data.Models
{
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Identity;

    public class User : IdentityUser
    {
        public IEnumerable<Message> Messages { get; } = new HashSet<Message>();
    }
}
