---
title: 冷门EF语句
date: "2019-4-16"
---

###### EF中sql语句执行
```
 using (MySqlConnection conn = _dbErp2.Database.GetDbConnection() as MySqlConnection)
{
    conn.Open();
    MySqlParameter[] para = new MySqlParameter[] {
        new  MySqlParameter ("city",$"{city}%"),
        new  MySqlParameter ("district",$"{district}%")
    };
    string sql = @"
SELECT  distinct custom_address,custom_state,custom_city,custom_district  FROM  erp2.list_order 
WHERE order_state='已发货' AND custom_city LIKE @city AND custom_district LIKE @district AND (custom_address!='自提' || custom_address!=''||custom_address is not null) LIMIT 20;";
DataTable dt = MySqlHelper.ExecuteDataset(conn, sql, para).Tables[0];
    List<MapGetResponse> rsp = new List<MapGetResponse>();
    foreach (DataRow dr in dt.Rows)
    {
        rsp.Add(new MapGetResponse
        {
            Province = dr["custom_state"].ToString(),
            City = dr["custom_city"].ToString(),
            District = dr["custom_district"].ToString(),
            Address = dr["custom_address"].ToString()
    });
}
conn.Close();
```
###### EF回滚

```
            using (var tran = _dbApp7.Database.BeginTransaction())
            {
                try
                {
                    var customer = _dbApp7.WxCustomer.Where(r => r.Id == wechatUser.Id).FirstOrDefault();
                    DateTime date_u = DateTime.FromFileTimeUtc(req.Timestamp);
                    if (Math.Abs(date_u.Subtract(DateTime.UtcNow).TotalMinutes) > 10) { return BadRequest("二维码已失效"); }
                    if (req.Role.ToLower() == "u")
                    {
                        var show = new WxPromotion
                        {
                            UId = req.Id,
                            Type = "share",
                            Enable = "是"
                        };
                        _dbApp7.WxPromotion.Add(show);
                        customer.Role = "user";
                        customer.PId = show.Id;
                        customer.UId = req.Id;
                        _dbApp7.WxCustomer.Update(customer);
                        _dbApp7.SaveChanges();
                    }
                    else if (req.Role.ToLower() == "p" && customer.Role != "user")
                    {
                        var p_show = new WxPromotion
                        {
                            UId = req.Id,
                            Type = "p_share",
                            Enable = "是"
                        };
                        _dbApp7.WxPromotion.Add(p_show);
                        customer.Role = "promoter";
                        customer.PId = p_show.Id;
                        customer.UId = req.Id;
                        _dbApp7.WxCustomer.Update(customer);
                        _dbApp7.SaveChanges();
                    }
                    return NoContent();
                }
                catch (HttpException e)
                {
                    tran.Rollback();
                    return StatusCode(e.Code, e.Value);
                }
            }
```

