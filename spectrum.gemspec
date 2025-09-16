# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "spectrum"
    spec.version       = "1.0.0"
    spec.authors       = ["Duhyeon Kim"]
    spec.email         = ["kdhluck@naver.com"]
  
    spec.summary       = "A clean, minimal Jekyll theme for personal websites with tech content focus"
    spec.description   = "Spectrum is a modern Jekyll theme designed for developers and tech enthusiasts. Features include tech bite sections, responsive design, dark mode support, and clean typography optimized for readability and performance."
    spec.homepage      = "https://github.com/dudududukim/spectrum"
    spec.license       = "MIT"
  
    spec.metadata      = {
      "bug_tracker_uri"   => "https://github.com/dudududukim/spectrum/issues",
      "changelog_uri"     => "https://github.com/dudududukim/spectrum/blob/main/CHANGELOG.md",
      "documentation_uri" => "https://github.com/dudududukim/spectrum/blob/main/README.md",
      "homepage_uri"      => "https://github.com/dudududukim/spectrum",
      "source_code_uri"   => "https://github.com/dudududukim/spectrum",
      "funding_uri"       => "https://github.com/sponsors/dudududukim",
      "rubygems_mfa_required" => "true"
    }
  
    spec.files         = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)}i)
    end
  
    spec.required_ruby_version = ">= 2.7.0"
  
    spec.add_runtime_dependency "jekyll", "~> 4.3"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  
    spec.add_development_dependency "bundler", "~> 2.0"
  end
  