(function() {var implementors = {
"ndarray":[["impl&lt;'a, A, B, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for &amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B, Output = A&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = A&gt;,\n    S2: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = B&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a> + <a class=\"trait\" href=\"ndarray/trait.DimMax.html\" title=\"trait ndarray::DimMax\">DimMax</a>&lt;E&gt;,\n    E: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, A, B, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B, Output = A&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = A&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    S2: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = B&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a> + <a class=\"trait\" href=\"ndarray/trait.DimMax.html\" title=\"trait ndarray::DimMax\">DimMax</a>&lt;E&gt;,\n    E: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, A, B, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for &amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B, Output = B&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = A&gt;,\n    S2: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = B&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,\n    E: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a> + <a class=\"trait\" href=\"ndarray/trait.DimMax.html\" title=\"trait ndarray::DimMax\">DimMax</a>&lt;D&gt;,</div>"],["impl&lt;'a, A, S, D, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B&gt; for &amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B, Output = A&gt;,\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = A&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,\n    B: <a class=\"trait\" href=\"ndarray/trait.ScalarOperand.html\" title=\"trait ndarray::ScalarOperand\">ScalarOperand</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i128.html\">i128</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i128.html\">i128</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i16.html\">i16</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i16.html\">i16</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i32.html\">i32</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i32.html\">i32</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i64.html\">i64</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i64.html\">i64</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i8.html\">i8</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i8.html\">i8</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.isize.html\">isize</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.isize.html\">isize</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u16.html\">u16</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u16.html\">u16</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u64.html\">u64</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u64.html\">u64</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;A, B, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B, Output = A&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = A&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    S2: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = B&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a> + <a class=\"trait\" href=\"ndarray/trait.DimMax.html\" title=\"trait ndarray::DimMax\">DimMax</a>&lt;E&gt;,\n    E: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;A, S, D, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;B, Output = A&gt;,\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = A&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,\n    B: <a class=\"trait\" href=\"ndarray/trait.ScalarOperand.html\" title=\"trait ndarray::ScalarOperand\">ScalarOperand</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i128.html\">i128</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i128.html\">i128</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i16.html\">i16</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i16.html\">i16</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i32.html\">i32</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i32.html\">i32</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i64.html\">i64</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i64.html\">i64</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i8.html\">i8</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i8.html\">i8</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.isize.html\">isize</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.isize.html\">isize</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u16.html\">u16</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u16.html\">u16</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u64.html\">u64</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>&gt; + <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"]],
"zerocopy":[["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I128.html\" title=\"struct zerocopy::byteorder::I128\">I128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I16.html\" title=\"struct zerocopy::byteorder::I16\">I16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I32.html\" title=\"struct zerocopy::byteorder::I32\">I32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I64.html\" title=\"struct zerocopy::byteorder::I64\">I64</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U128.html\" title=\"struct zerocopy::byteorder::U128\">U128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U16.html\" title=\"struct zerocopy::byteorder::U16\">U16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U32.html\" title=\"struct zerocopy::byteorder::U32\">U32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.Shr.html\" title=\"trait core::ops::bit::Shr\">Shr</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U64.html\" title=\"struct zerocopy::byteorder::U64\">U64</a>&lt;O&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()