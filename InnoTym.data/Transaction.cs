//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InnoTym.data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Transaction
    {
        public int transId { get; set; }
        public int userId { get; set; }
        public int refId { get; set; }
        public string transType { get; set; }
        public decimal initialAmount { get; set; }
        public decimal amount { get; set; }
    
        public virtual user user { get; set; }
        public virtual user user1 { get; set; }
    }
}
