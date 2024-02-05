# Animals Classification System

Here's a simple JavaScript system developed for the University of Learnable (UL) to categorize animals based on their characteristics, such as having a backbone, blood temperature regulation, and more. 

## Usage

To use this system, create instances of the following classes: `ColdBlooded`, `WarmBlooded`, and `Insect`, and initialize them with the specific details of the animal.

## Classes

### Animals

The basic class for all animals, with common properties like `name` and `animalClass`.

### Vertebrate

Extends `Animals` and represents animals with a backbone.

### Invertebrate

Extends `Animals` and represents animals without a backbone.

### WarmBlooded

Extends `Vertebrate` and represents warm-blooded vertebrates.

### ColdBlooded

Extends `Vertebrate` and represents cold-blooded vertebrates.

### Insect

Extends `Invertebrate` and represents insects.

## Methods

### `behaviour()`

A method in the base class `Animals` returning a generic behavior message.

### `hasBackbone()`

A method in the `Vertebrate` class indicating that the animal has a backbone.

### `withoutBackbone()`

A method in the `Invertebrate` class indicating that the animal has an exoskeleton.

### `isWarmBlooded()`

A method in the `WarmBlooded` class indicating that the animal can regulate its body temperature.

### `isColdBlooded()`

A method in both the `ColdBlooded` and `Insect` classes indicating that the animal cannot regulate its body temperature.

Feel free to use and extend this simple animal classification system for your projects!