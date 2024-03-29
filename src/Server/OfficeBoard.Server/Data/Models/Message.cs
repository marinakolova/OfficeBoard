﻿namespace OfficeBoard.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using OfficeBoard.Server.Data.Models.Base;

    using static OfficeBoard.Server.Data.Validation.Message;

    public class Message : DeletableEntity
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(MaxTtileLength)]
        public string Title { get; set; }

        [Required]
        [MaxLength(MaxContentLength)]
        public string Content { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }
    }
}
