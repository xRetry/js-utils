{
    description = "Neovim flake with custom settings";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachSystem ["x86_64-linux"] (system:
    let
        pkgs = import nixpkgs {
            inherit system;
        }; 
    in {
        devShell = pkgs.mkShell {
            buildInputs = with pkgs; [
                typescript
                nodePackages.typescript-language-server
            ];
        };
    });
}
