namespace OfficeBoard.Server.Data.Models
{
    using System;
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Identity;
    using OfficeBoard.Server.Data.Models.Base;

    public class User : IdentityUser, IEntity
    {
        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string ModifiedBy { get; set; }

        public IEnumerable<Message> Messages { get; } = new HashSet<Message>();
    }
}
