(function() {var implementors = {
"hashbrown":[["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;&amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,\n    A: Allocator,</div>"]],
"ndarray":[["impl&lt;'a, A, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;A&gt;,\n    S: <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>&lt;Elem = A&gt;,\n    S2: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = A&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,\n    E: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"],["impl&lt;A, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;A&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"ndarray/trait.ScalarOperand.html\" title=\"trait ndarray::ScalarOperand\">ScalarOperand</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;A&gt;,\n    S: <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>&lt;Elem = A&gt;,\n    D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"]],
"tribool":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;<a class=\"enum\" href=\"tribool/enum.Tribool.html\" title=\"enum tribool::Tribool\">Tribool</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>"],["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"tribool/enum.Tribool.html\" title=\"enum tribool::Tribool\">Tribool</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;B&gt; for <a class=\"enum\" href=\"tribool/enum.Tribool.html\" title=\"enum tribool::Tribool\">Tribool</a>"]],
"zerocopy":[["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I128.html\" title=\"struct zerocopy::byteorder::I128\">I128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I16.html\" title=\"struct zerocopy::byteorder::I16\">I16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I32.html\" title=\"struct zerocopy::byteorder::I32\">I32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I64.html\" title=\"struct zerocopy::byteorder::I64\">I64</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U128.html\" title=\"struct zerocopy::byteorder::U128\">U128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U16.html\" title=\"struct zerocopy::byteorder::U16\">U16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U32.html\" title=\"struct zerocopy::byteorder::U32\">U32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U64.html\" title=\"struct zerocopy::byteorder::U64\">U64</a>&lt;O&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()