(function() {var implementors = {
"clap_builder":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"clap_builder/builder/struct.OsStr.html\" title=\"struct clap_builder::builder::OsStr\">OsStr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"clap_builder/builder/struct.Str.html\" title=\"struct clap_builder::builder::Str\">Str</a>"]],
"crossbeam_epoch":[["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;"]],
"crossbeam_utils":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_utils/struct.CachePadded.html\" title=\"struct crossbeam_utils::CachePadded\">CachePadded</a>&lt;T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockReadGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockReadGuard\">ShardedLockReadGuard</a>&lt;'_, T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockWriteGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockWriteGuard\">ShardedLockWriteGuard</a>&lt;'_, T&gt;"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = L::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a>&gt;,</div>"]],
"humantime":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"humantime/struct.Duration.html\" title=\"struct humantime::Duration\">Duration</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"humantime/struct.Timestamp.html\" title=\"struct humantime::Timestamp\">Timestamp</a>"]],
"ndarray":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ndarray/struct.IxDynImpl.html\" title=\"struct ndarray::IxDynImpl\">IxDynImpl</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ndarray/struct.MathCell.html\" title=\"struct ndarray::MathCell\">MathCell</a>&lt;T&gt;"],["impl&lt;T, Din, Dout&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ndarray/struct.SliceInfo.html\" title=\"struct ndarray::SliceInfo\">SliceInfo</a>&lt;T, Din, Dout&gt;<div class=\"where\">where\n    Din: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,\n    Dout: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,</div>"]],
"once_cell":[["impl&lt;T, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"once_cell/sync/struct.Lazy.html\" title=\"struct once_cell::sync::Lazy\">Lazy</a>&lt;T, F&gt;"],["impl&lt;T, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"once_cell/unsync/struct.Lazy.html\" title=\"struct once_cell::unsync::Lazy\">Lazy</a>&lt;T, F&gt;"]],
"ordered_float":[["impl&lt;T: <a class=\"trait\" href=\"ordered_float/trait.FloatCore.html\" title=\"trait ordered_float::FloatCore\">FloatCore</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"ordered_float/trait.FloatCore.html\" title=\"trait ordered_float::FloatCore\">FloatCore</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;"]],
"svg":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/path/struct.Data.html\" title=\"struct svg::node::element::path::Data\">Data</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/path/struct.Parameters.html\" title=\"struct svg::node::element::path::Parameters\">Parameters</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Anchor.html\" title=\"struct svg::node::element::Anchor\">Anchor</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Animate.html\" title=\"struct svg::node::element::Animate\">Animate</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.AnimateColor.html\" title=\"struct svg::node::element::AnimateColor\">AnimateColor</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.AnimateMotion.html\" title=\"struct svg::node::element::AnimateMotion\">AnimateMotion</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.AnimateTransform.html\" title=\"struct svg::node::element::AnimateTransform\">AnimateTransform</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Circle.html\" title=\"struct svg::node::element::Circle\">Circle</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.ClipPath.html\" title=\"struct svg::node::element::ClipPath\">ClipPath</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Definitions.html\" title=\"struct svg::node::element::Definitions\">Definitions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Description.html\" title=\"struct svg::node::element::Description\">Description</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Ellipse.html\" title=\"struct svg::node::element::Ellipse\">Ellipse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Filter.html\" title=\"struct svg::node::element::Filter\">Filter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectBlend.html\" title=\"struct svg::node::element::FilterEffectBlend\">FilterEffectBlend</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectColorMatrix.html\" title=\"struct svg::node::element::FilterEffectColorMatrix\">FilterEffectColorMatrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectComponentTransfer.html\" title=\"struct svg::node::element::FilterEffectComponentTransfer\">FilterEffectComponentTransfer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectComposite.html\" title=\"struct svg::node::element::FilterEffectComposite\">FilterEffectComposite</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectConvolveMatrix.html\" title=\"struct svg::node::element::FilterEffectConvolveMatrix\">FilterEffectConvolveMatrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectDiffuseLighting.html\" title=\"struct svg::node::element::FilterEffectDiffuseLighting\">FilterEffectDiffuseLighting</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectDisplacementMap.html\" title=\"struct svg::node::element::FilterEffectDisplacementMap\">FilterEffectDisplacementMap</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectDistantLight.html\" title=\"struct svg::node::element::FilterEffectDistantLight\">FilterEffectDistantLight</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectDropShadow.html\" title=\"struct svg::node::element::FilterEffectDropShadow\">FilterEffectDropShadow</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectFlood.html\" title=\"struct svg::node::element::FilterEffectFlood\">FilterEffectFlood</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectFunctionA.html\" title=\"struct svg::node::element::FilterEffectFunctionA\">FilterEffectFunctionA</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectFunctionB.html\" title=\"struct svg::node::element::FilterEffectFunctionB\">FilterEffectFunctionB</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectFunctionG.html\" title=\"struct svg::node::element::FilterEffectFunctionG\">FilterEffectFunctionG</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectFunctionR.html\" title=\"struct svg::node::element::FilterEffectFunctionR\">FilterEffectFunctionR</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectGaussianBlur.html\" title=\"struct svg::node::element::FilterEffectGaussianBlur\">FilterEffectGaussianBlur</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectImage.html\" title=\"struct svg::node::element::FilterEffectImage\">FilterEffectImage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectMerge.html\" title=\"struct svg::node::element::FilterEffectMerge\">FilterEffectMerge</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectMergeNode.html\" title=\"struct svg::node::element::FilterEffectMergeNode\">FilterEffectMergeNode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectMorphology.html\" title=\"struct svg::node::element::FilterEffectMorphology\">FilterEffectMorphology</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectOffset.html\" title=\"struct svg::node::element::FilterEffectOffset\">FilterEffectOffset</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectPointLight.html\" title=\"struct svg::node::element::FilterEffectPointLight\">FilterEffectPointLight</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectSpecularLighting.html\" title=\"struct svg::node::element::FilterEffectSpecularLighting\">FilterEffectSpecularLighting</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectSpotLight.html\" title=\"struct svg::node::element::FilterEffectSpotLight\">FilterEffectSpotLight</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectTile.html\" title=\"struct svg::node::element::FilterEffectTile\">FilterEffectTile</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.FilterEffectTurbulence.html\" title=\"struct svg::node::element::FilterEffectTurbulence\">FilterEffectTurbulence</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.ForeignObject.html\" title=\"struct svg::node::element::ForeignObject\">ForeignObject</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Group.html\" title=\"struct svg::node::element::Group\">Group</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Image.html\" title=\"struct svg::node::element::Image\">Image</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Line.html\" title=\"struct svg::node::element::Line\">Line</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.LinearGradient.html\" title=\"struct svg::node::element::LinearGradient\">LinearGradient</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Link.html\" title=\"struct svg::node::element::Link\">Link</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Marker.html\" title=\"struct svg::node::element::Marker\">Marker</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Mask.html\" title=\"struct svg::node::element::Mask\">Mask</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.MotionPath.html\" title=\"struct svg::node::element::MotionPath\">MotionPath</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Path.html\" title=\"struct svg::node::element::Path\">Path</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Pattern.html\" title=\"struct svg::node::element::Pattern\">Pattern</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Polygon.html\" title=\"struct svg::node::element::Polygon\">Polygon</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Polyline.html\" title=\"struct svg::node::element::Polyline\">Polyline</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.RadialGradient.html\" title=\"struct svg::node::element::RadialGradient\">RadialGradient</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Rectangle.html\" title=\"struct svg::node::element::Rectangle\">Rectangle</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.SVG.html\" title=\"struct svg::node::element::SVG\">SVG</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Script.html\" title=\"struct svg::node::element::Script\">Script</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Stop.html\" title=\"struct svg::node::element::Stop\">Stop</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Style.html\" title=\"struct svg::node::element::Style\">Style</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Symbol.html\" title=\"struct svg::node::element::Symbol\">Symbol</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.TSpan.html\" title=\"struct svg::node::element::TSpan\">TSpan</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Text.html\" title=\"struct svg::node::element::Text\">Text</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.TextPath.html\" title=\"struct svg::node::element::TextPath\">TextPath</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Title.html\" title=\"struct svg::node::element::Title\">Title</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/element/struct.Use.html\" title=\"struct svg::node::element::Use\">Use</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"svg/node/struct.Value.html\" title=\"struct svg::node::Value\">Value</a>"]],
"zerocopy":[["impl&lt;B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"zerocopy/struct.Ref.html\" title=\"struct zerocopy::Ref\">Ref</a>&lt;B, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.slice.html\">[T]</a>&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"zerocopy/trait.ByteSlice.html\" title=\"trait zerocopy::ByteSlice\">ByteSlice</a>,\n    T: <a class=\"trait\" href=\"zerocopy/trait.FromBytes.html\" title=\"trait zerocopy::FromBytes\">FromBytes</a>,</div>"],["impl&lt;B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"zerocopy/struct.Ref.html\" title=\"struct zerocopy::Ref\">Ref</a>&lt;B, T&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"zerocopy/trait.ByteSlice.html\" title=\"trait zerocopy::ByteSlice\">ByteSlice</a>,\n    T: <a class=\"trait\" href=\"zerocopy/trait.FromBytes.html\" title=\"trait zerocopy::FromBytes\">FromBytes</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"zerocopy/trait.Unaligned.html\" title=\"trait zerocopy::Unaligned\">Unaligned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"zerocopy/struct.Unalign.html\" title=\"struct zerocopy::Unalign\">Unalign</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()