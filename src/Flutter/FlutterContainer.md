# Container

```java
Container({
     Key key,
     AlignmentGeometry alignment,
     EdgeInsetsGeometry padding,
     Color color,
     Decoration decoration,
     Decoration foregroundDecoration,
     double width,
     double height,
     BoxConstraints constraints,
     EdgeInsetsGeometry margin,
     Matrix4 transform,
     Widget child,
     Clip clipBehavior
})
```

### Container 参数表

| 参数                 | 描述                                        | 类型                      |
| -------------------- | ------------------------------------------- | ------------------------- |
| key                  | ----                                        | --------                  |
| alignment            | container 唯一子项在 container 内的对齐方式 | [Alignment](#Alignment)   |
| padding              | container 的内边距                          | [EdgeInsets](#EdgeInsets) |
| color                | container 的背景色                          | [Colors](#Colors)         |
| decoration           | ----                                        | --------                  |
| foregroundDecoration | ----                                        | --------                  |
| width                | container 的宽度                            | Double                    |
| height               | container 的高度                            | Double                    |
| constraints          | ----                                        | --------                  |
| margin               | container 的外边距                          | [EdgeInsets](#EdgeInsets) |
| transform            | 变换                                        | --------                  |
| child                | container 的唯一直接子项                    | Widget                    |
| clipBehavior         | ----                                        | --------                  |

### Alignment

_Alignment 是一个类, 继承 AlignmentGeometry,定了一些常用的布局样式常量如下_

| 常量         | 描述             |
| :----------- | :--------------- |
| topLeft      | 左上角对齐       |
| topCenter    | 上水平居中对齐   |
| topRight     | 右上角对齐       |
| centerLeft   | 左边垂直居中对齐 |
| center       | 居中对齐         |
| centerRight  | 右边垂直居中对齐 |
| bottomLeft   | 左下角对齐       |
| bottomCenter | 下水平居中对齐   |
| bottomRight  | 右下角对齐       |

**部分源码**

```java
  /// The top left corner.
  static const Alignment topLeft = Alignment(-1.0, -1.0);

  /// The center point along the top edge.
  static const Alignment topCenter = Alignment(0.0, -1.0);

  /// The top right corner.
  static const Alignment topRight = Alignment(1.0, -1.0);

  /// The center point along the left edge.
  static const Alignment centerLeft = Alignment(-1.0, 0.0);

  /// The center point, both horizontally and vertically.
  static const Alignment center = Alignment(0.0, 0.0);

  /// The center point along the right edge.
  static const Alignment centerRight = Alignment(1.0, 0.0);

  /// The bottom left corner.
  static const Alignment bottomLeft = Alignment(-1.0, 1.0);

  /// The center point along the bottom edge.
  static const Alignment bottomCenter = Alignment(0.0, 1.0);

  /// The bottom right corner.
  static const Alignment bottomRight = Alignment(1.0, 1.0);
```

### EdgeInsets

_EdgeInsets 类继承 EdgeInsetsGeometry, 提供了一下方法来设置边距_

| 方法              | 描述                                                                        |
| ----------------- | --------------------------------------------------------------------------- |
| fromLTRB          | 以 left, top, right, bottom 的顺序来设置边距                                |
| all               | 一次设置左上右下四个方向的边距,边距引用一个值                               |
| only              | 只设置单个或几个方向的值, 有 left, top, right, bottom 四个 key, 值是 double |
| symmetric         | 对横 ( horizontal ) 纵 ( vertical ) 两个方向设置边距                        |
| fromWindowPadding | 按照设备像素来设置边距, 目前只知道一个 zero 常量                            |
| zero              | 调用的 only 方法什么都没传入, 边距为 0                                      |

**部分源码**

````java
  /// Creates insets from offsets from the left, top, right, and bottom.
  const EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom);

  /// Creates insets where all the offsets are `value`.
  ///
  /// {@tool snippet}
  ///
  /// Typical eight-pixel margin on all sides:
  ///
  /// ```dart
  /// const EdgeInsets.all(8.0)
  /// ```
  /// {@end-tool}
  const EdgeInsets.all(double value)
    : left = value,
      top = value,
      right = value,
      bottom = value;

  /// Creates insets with only the given values non-zero.
  ///
  /// {@tool snippet}
  ///
  /// Left margin indent of 40 pixels:
  ///
  /// ```dart
  /// const EdgeInsets.only(left: 40.0)
  /// ```
  /// {@end-tool}
  const EdgeInsets.only({
    this.left = 0.0,
    this.top = 0.0,
    this.right = 0.0,
    this.bottom = 0.0,
  });

  /// Creates insets with symmetrical vertical and horizontal offsets.
  ///
  /// {@tool snippet}
  ///
  /// Eight pixel margin above and below, no horizontal margins:
  ///
  /// ```dart
  /// const EdgeInsets.symmetric(vertical: 8.0)
  /// ```
  /// {@end-tool}
  const EdgeInsets.symmetric({
    double vertical = 0.0,
    double horizontal = 0.0,
  }) : left = horizontal,
       top = vertical,
       right = horizontal,
       bottom = vertical;

  /// Creates insets that match the given window padding.
  ///
  /// If you need the current system padding or view insets in the context of a
  /// widget, consider using [MediaQuery.of] to obtain these values rather than
  /// using the value from [dart:ui.window], so that you get notified of
  /// changes.
  EdgeInsets.fromWindowPadding(ui.WindowPadding padding, double devicePixelRatio)
    : left = padding.left / devicePixelRatio,
      top = padding.top / devicePixelRatio,
      right = padding.right / devicePixelRatio,
      bottom = padding.bottom / devicePixelRatio;

  /// An [EdgeInsets] with zero offsets in each direction.
  static const EdgeInsets zero = EdgeInsets.only();
````

### Colors (这个我就不总结了, 颜色值, 将自己要的颜色翻译成英文一般没错, 只要有的话)
