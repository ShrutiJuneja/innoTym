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
    
    public partial class user
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public user()
        {
            this.Transactions = new HashSet<Transaction>();
            this.Transactions1 = new HashSet<Transaction>();
        }
    
        public int userId { get; set; }
        public string userName { get; set; }
        public string email { get; set; }
        public Nullable<decimal> PhoneNo { get; set; }
        public string gender { get; set; }
        public string userPassword { get; set; }
        public Nullable<decimal> amount { get; set; }
        public Nullable<int> age { get; set; }
        public string imageUrl { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Transaction> Transactions { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Transaction> Transactions1 { get; set; }
    }
}
