(function() {var implementors = {
"crossbeam_deque":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"crossbeam_deque/enum.Steal.html\" title=\"enum crossbeam_deque::Steal\">Steal</a>&lt;T&gt;&gt; for <a class=\"enum\" href=\"crossbeam_deque/enum.Steal.html\" title=\"enum crossbeam_deque::Steal\">Steal</a>&lt;T&gt;"]],
"hashbrown":[["impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator,</div>"],["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator,</div>"]],
"indexmap":[["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"]],
"ndarray":[["impl&lt;A, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;A&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, <a class=\"type\" href=\"ndarray/type.Ix1.html\" title=\"type ndarray::Ix1\">Ix1</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"ndarray/trait.DataOwned.html\" title=\"trait ndarray::DataOwned\">DataOwned</a>&lt;Elem = A&gt;,</div>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"]],
"serde_json":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"]],
"slotmap":[["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"slotmap/struct.SparseSecondaryMap.html\" title=\"struct slotmap::SparseSecondaryMap\">SparseSecondaryMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"slotmap/trait.Key.html\" title=\"trait slotmap::Key\">Key</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;K: <a class=\"trait\" href=\"slotmap/trait.Key.html\" title=\"trait slotmap::Key\">Key</a>, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"slotmap/struct.SecondaryMap.html\" title=\"struct slotmap::SecondaryMap\">SecondaryMap</a>&lt;K, V&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()