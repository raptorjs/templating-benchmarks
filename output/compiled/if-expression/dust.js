(function(dust){dust.register("if-expression",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["accounts"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div>").h("select",ctx,{"block":body_2},{"key":body_9},"h").w("</div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.h("eq",ctx,{"block":body_3},{"value":"closed"},"h").h("eq",ctx,{"block":body_4},{"value":"suspended"},"h").h("default",ctx,{"block":body_5},{},"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<div>Your account has been closed!</div>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<div>Your account has been temporarily suspended</div>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<div>Bank balance:<span class=\"").h("if",ctx,{"else":body_6,"block":body_7},{"cond":body_8},"h").w("\">").f(ctx.get(["formattedBalance"], false),ctx,"h").w("</span></div>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("postive");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("negative");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.get(["balance"], false),ctx,"h").w(" < 0");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.f(ctx.get(["accountStatus"], false),ctx,"h");}body_9.__dustBody=!0;return body_0}(dust));