﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using InnoTym.data;

namespace InnoTym.api.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using InnoTym.data;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<user>("users");
    builder.EntitySet<Transaction>("Transactions"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class usersController : ODataController
    {
        private innotymEntities db = new innotymEntities();

        // GET: odata/users
        [EnableQuery]
        public IQueryable<user> Getusers()
        {
            return db.users;
        }

        // GET: odata/users(5)
        [EnableQuery]
        public SingleResult<user> Getuser([FromODataUri] int key)
        {
            return SingleResult.Create(db.users.Where(user => user.userId == key));
        }

        // PUT: odata/users(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<user> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            user user = db.users.Find(key);
            if (user == null)
            {
                return NotFound();
            }

            patch.Put(user);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!userExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(user);
        }

        // POST: odata/users
        public IHttpActionResult Post(user user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.users.Add(user);
            db.SaveChanges();

            return Created(user);
        }

        // PATCH: odata/users(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<user> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            user user = db.users.Find(key);
            if (user == null)
            {
                return NotFound();
            }

            patch.Patch(user);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!userExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(user);
        }

        // DELETE: odata/users(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            user user = db.users.Find(key);
            if (user == null)
            {
                return NotFound();
            }

            db.users.Remove(user);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/users(5)/Transactions
        [EnableQuery]
        public IQueryable<Transaction> GetTransactions([FromODataUri] int key)
        {
            return db.users.Where(m => m.userId == key).SelectMany(m => m.Transactions);
        }

        // GET: odata/users(5)/Transactions1
        [EnableQuery]
        public IQueryable<Transaction> GetTransactions1([FromODataUri] int key)
        {
            return db.users.Where(m => m.userId == key).SelectMany(m => m.Transactions1);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool userExists(int key)
        {
            return db.users.Count(e => e.userId == key) > 0;
        }
    }
}
