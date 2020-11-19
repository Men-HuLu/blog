(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h6",{attrs:{id:"ef中sql语句执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ef中sql语句执行"}},[s._v("#")]),s._v(" EF中sql语句执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' using (MySqlConnection conn = _dbErp2.Database.GetDbConnection() as MySqlConnection)\n{\n    conn.Open();\n    MySqlParameter[] para = new MySqlParameter[] {\n        new  MySqlParameter ("city",$"{city}%"),\n        new  MySqlParameter ("district",$"{district}%")\n    };\n    string sql = @"\nSELECT  distinct custom_address,custom_state,custom_city,custom_district  FROM  erp2.list_order \nWHERE order_state=\'已发货\' AND custom_city LIKE @city AND custom_district LIKE @district AND (custom_address!=\'自提\' || custom_address!=\'\'||custom_address is not null) LIMIT 20;";\nDataTable dt = MySqlHelper.ExecuteDataset(conn, sql, para).Tables[0];\n    List<MapGetResponse> rsp = new List<MapGetResponse>();\n    foreach (DataRow dr in dt.Rows)\n    {\n        rsp.Add(new MapGetResponse\n        {\n            Province = dr["custom_state"].ToString(),\n            City = dr["custom_city"].ToString(),\n            District = dr["custom_district"].ToString(),\n            Address = dr["custom_address"].ToString()\n    });\n}\nconn.Close();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h6",{attrs:{id:"ef回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ef回滚"}},[s._v("#")]),s._v(" EF回滚")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('            using (var tran = _dbApp7.Database.BeginTransaction())\n            {\n                try\n                {\n                    var customer = _dbApp7.WxCustomer.Where(r => r.Id == wechatUser.Id).FirstOrDefault();\n                    DateTime date_u = DateTime.FromFileTimeUtc(req.Timestamp);\n                    if (Math.Abs(date_u.Subtract(DateTime.UtcNow).TotalMinutes) > 10) { return BadRequest("二维码已失效"); }\n                    if (req.Role.ToLower() == "u")\n                    {\n                        var show = new WxPromotion\n                        {\n                            UId = req.Id,\n                            Type = "share",\n                            Enable = "是"\n                        };\n                        _dbApp7.WxPromotion.Add(show);\n                        customer.Role = "user";\n                        customer.PId = show.Id;\n                        customer.UId = req.Id;\n                        _dbApp7.WxCustomer.Update(customer);\n                        _dbApp7.SaveChanges();\n                    }\n                    else if (req.Role.ToLower() == "p" && customer.Role != "user")\n                    {\n                        var p_show = new WxPromotion\n                        {\n                            UId = req.Id,\n                            Type = "p_share",\n                            Enable = "是"\n                        };\n                        _dbApp7.WxPromotion.Add(p_show);\n                        customer.Role = "promoter";\n                        customer.PId = p_show.Id;\n                        customer.UId = req.Id;\n                        _dbApp7.WxCustomer.Update(customer);\n                        _dbApp7.SaveChanges();\n                    }\n                    return NoContent();\n                }\n                catch (HttpException e)\n                {\n                    tran.Rollback();\n                    return StatusCode(e.Code, e.Value);\n                }\n            }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);