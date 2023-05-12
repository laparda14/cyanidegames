var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["016aa5ae-6dc6-4f9a-9916-0e08150d2ea3","ed97c794-d6c5-4e72-8094-adf732a412b2","9f393219-0600-4fef-b8bb-1782b2797973","fe5e8b7c-8896-4fea-9814-baf9543e0624","9abe9a6d-e9fa-4305-a276-f87a62740d8d","1eed2b31-d035-48b1-9f54-76d3760538fe","e29d339e-8143-4c1e-b4fe-db3ed424180d","ec9f77b9-81e8-4d3f-9b50-99e030a6cb9d","96d8c48c-eefa-4740-8123-8d4a679d4995","e2e99a5d-e9af-42b4-8030-34d1670bf41a","94e7f7a7-7eb5-433c-b3eb-914af3ce169a","6de348fe-5c3a-416a-99cd-0c4994379563","9aa8bf2e-e8e5-42ea-a4a4-7f60a1bf1fd7","468e0770-cfa1-42c6-8c6c-36f2ecfb3c55","63c9d32a-e6a0-4ace-97e5-da402120671a","e0a8396d-0f45-4659-941d-ea44d12f8a35","eaa372f9-e1ad-47a6-b02d-2ed2bb85e6fa","5e68b38f-4bb2-441b-8634-6a0832faeb9d","dac897c7-5e51-439f-85e2-a9b66be73bb1","dcd5a4eb-46d8-43b2-b74b-f08237430e55","61f57fe6-9f13-4a8d-a0e8-d590cb017cff","2c284013-5d4e-4264-af2e-604635989f59","64df0922-88c4-45d0-9b1b-be74973576a9","1a81da15-63a9-4f0b-865d-633bad350825","ee2b9dd1-843e-4591-8360-1127a769631d","d86bf7e3-ac6f-49d1-9889-9534dc110fbe","6870045c-9726-4a23-b159-7bce8cba9537","8b330197-0ee6-4bef-a3a2-73d4308f18d7","a11b788c-4bb7-4a88-bc85-6751ff6600ee","c3c162a6-ab83-4403-a88c-4899bf6b22b7","1859a863-0ef3-4b00-8ba8-1433044c2dfc","4fba4b2f-519c-4e16-bee9-4b78f0facbad","8d082b87-e323-41f7-8250-aeeeb6136063","a134144b-d5b6-4450-8db4-d0d314d1671e","c57d89e2-a0af-4793-a6f9-d7a9c5cb50ce","e0abeef8-0d4e-41bc-b4e0-25e54aab73a9","827bedb8-d322-4935-ba59-8a3c634f6004","a30030a0-218f-4dd3-9920-f85b297ed40c","cc35b5ca-5e60-4196-a898-245f59125715","9d3e7ecd-70d9-4042-836a-a933df8dc6cc"],"propsByKey":{"016aa5ae-6dc6-4f9a-9916-0e08150d2ea3":{"name":"tiledWood.jpg_1","sourceUrl":"assets/v3/animations/ebaVseZkUHerhp8Lgd5JNbOp67-csytSnprvNe_Cg8U/016aa5ae-6dc6-4f9a-9916-0e08150d2ea3.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"PEMpe69lhUE8GZS5KnIk1K_raV.VseOC","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/ebaVseZkUHerhp8Lgd5JNbOp67-csytSnprvNe_Cg8U/016aa5ae-6dc6-4f9a-9916-0e08150d2ea3.png"},"ed97c794-d6c5-4e72-8094-adf732a412b2":{"name":"tiledWoodlow","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"u0oWtH14qWiLhUIQvLk8VTVRhctvIA94","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/ed97c794-d6c5-4e72-8094-adf732a412b2.png"},"9f393219-0600-4fef-b8bb-1782b2797973":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"5VTxwvLyQZ8vu0UPYbNPX6STvabJ1zm0","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/9f393219-0600-4fef-b8bb-1782b2797973.png"},"fe5e8b7c-8896-4fea-9814-baf9543e0624":{"name":"gatewaysMansionWall.jpg_1","sourceUrl":"assets/v3/animations/ebaVseZkUHerhp8Lgd5JNbOp67-csytSnprvNe_Cg8U/fe5e8b7c-8896-4fea-9814-baf9543e0624.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"M8vTMLa_Rlz5USVn1gvhhGbe0KL41uu5","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/ebaVseZkUHerhp8Lgd5JNbOp67-csytSnprvNe_Cg8U/fe5e8b7c-8896-4fea-9814-baf9543e0624.png"},"9abe9a6d-e9fa-4305-a276-f87a62740d8d":{"name":"MansionWall100px","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"kf2gQ2qLD7x9jKAnUVjD7ZaFDYBSEj_k","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9abe9a6d-e9fa-4305-a276-f87a62740d8d.png"},"1eed2b31-d035-48b1-9f54-76d3760538fe":{"name":"MansionWall100px2","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"RjtZQqTt3WMwn_UXgEjEtFViqHncwMwV","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/1eed2b31-d035-48b1-9f54-76d3760538fe.png"},"e29d339e-8143-4c1e-b4fe-db3ed424180d":{"name":"MansionWall100px3","sourceUrl":null,"frameSize":{"x":300,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CgoZqbSmbVbKWpom0DDIAflS.6vHmiB4","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":100},"rootRelativePath":"assets/e29d339e-8143-4c1e-b4fe-db3ed424180d.png"},"ec9f77b9-81e8-4d3f-9b50-99e030a6cb9d":{"name":"MansionWall100px4","sourceUrl":null,"frameSize":{"x":400,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YdsBZnfLgguD8adB1Pfwfl8N5xGFw7dL","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":100},"rootRelativePath":"assets/ec9f77b9-81e8-4d3f-9b50-99e030a6cb9d.png"},"96d8c48c-eefa-4740-8123-8d4a679d4995":{"name":"MansionWall100px5","sourceUrl":null,"frameSize":{"x":500,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"iMPSCYufHmzxehT9.Cffb56wZGIrmaHS","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":100},"rootRelativePath":"assets/96d8c48c-eefa-4740-8123-8d4a679d4995.png"},"e2e99a5d-e9af-42b4-8030-34d1670bf41a":{"name":"MansionWall50px","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"4zaTOD_X.1Uq44RWTFCVriC_CJoFiCv_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/e2e99a5d-e9af-42b4-8030-34d1670bf41a.png"},"94e7f7a7-7eb5-433c-b3eb-914af3ce169a":{"name":"seekWindow","sourceUrl":null,"frameSize":{"x":200,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"F6kgoNuYSGCpgflyXoV8oyqGZScLyms1","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":400},"rootRelativePath":"assets/94e7f7a7-7eb5-433c-b3eb-914af3ce169a.png"},"6de348fe-5c3a-416a-99cd-0c4994379563":{"name":"seekWindow2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"b1Qq_gSLhzhjIM6q0w6P0BUgNZEsOb5Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/6de348fe-5c3a-416a-99cd-0c4994379563.png"},"9aa8bf2e-e8e5-42ea-a4a4-7f60a1bf1fd7":{"name":"gatewaysMansionWallWindow","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"kKNPTJ.CRaNEMG40jUGwmscAxuJ7mE5h","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/9aa8bf2e-e8e5-42ea-a4a4-7f60a1bf1fd7.png"},"468e0770-cfa1-42c6-8c6c-36f2ecfb3c55":{"name":"OutOfBounds200","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"n6msVefoUzbOeT_soi_G07OtyfMAqS6r","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/468e0770-cfa1-42c6-8c6c-36f2ecfb3c55.png"},"63c9d32a-e6a0-4ace-97e5-da402120671a":{"name":"OutOfBounds2","sourceUrl":null,"frameSize":{"x":2,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"jmxfpmPQsFGwZCFjolBnagllqxnKP10B","loadedFromSource":true,"saved":true,"sourceSize":{"x":2,"y":2},"rootRelativePath":"assets/63c9d32a-e6a0-4ace-97e5-da402120671a.png"},"e0a8396d-0f45-4659-941d-ea44d12f8a35":{"name":"OutOfBounds600","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"AiCkTr3oY5bj_54EoN.6gy1eQ2zYxlnY","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/e0a8396d-0f45-4659-941d-ea44d12f8a35.png"},"eaa372f9-e1ad-47a6-b02d-2ed2bb85e6fa":{"name":"OutOfBounds200Rain","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":8,"looping":true,"frameDelay":1,"version":"BJ4uQsB5zfoIB_7BThhC0HQ4E0zUD_un","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/eaa372f9-e1ad-47a6-b02d-2ed2bb85e6fa.png"},"5e68b38f-4bb2-441b-8634-6a0832faeb9d":{"name":"Elevator","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":23,"looping":true,"frameDelay":1,"version":"SNLsgqNpWrRKYEpb.C7GFsMFSxCXeI5S","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1000},"rootRelativePath":"assets/5e68b38f-4bb2-441b-8634-6a0832faeb9d.png"},"dac897c7-5e51-439f-85e2-a9b66be73bb1":{"name":"door_right","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":2,"looping":true,"frameDelay":12,"version":".sFmz_iSNgi1M.UFbWBx.SdX9pwjXORt","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":400},"rootRelativePath":"assets/dac897c7-5e51-439f-85e2-a9b66be73bb1.png"},"dcd5a4eb-46d8-43b2-b74b-f08237430e55":{"name":"DarkRoomOverlay","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":3,"looping":true,"frameDelay":12,"version":"sZguolusWd9jVtyoyAEJkrOjqKON8uB2","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/dcd5a4eb-46d8-43b2-b74b-f08237430e55.png"},"61f57fe6-9f13-4a8d-a0e8-d590cb017cff":{"name":"closet.jpg_1","sourceUrl":null,"frameSize":{"x":95,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"u.K78NuZdq4UOZepm1Qz_.7zXdrAKDrz","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":150},"rootRelativePath":"assets/61f57fe6-9f13-4a8d-a0e8-d590cb017cff.png"},"2c284013-5d4e-4264-af2e-604635989f59":{"name":"cabinet.jpg_1","sourceUrl":null,"frameSize":{"x":54,"y":50},"frameCount":2,"looping":true,"frameDelay":60,"version":"nLmUUMNQccQxBXPAvvoe9Y5_TZF58lm4","loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":100},"rootRelativePath":"assets/2c284013-5d4e-4264-af2e-604635989f59.png"},"64df0922-88c4-45d0-9b1b-be74973576a9":{"name":"key.jpg_1","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":13,"looping":false,"frameDelay":1,"version":"kdcQiTKCdzmUd18sRl8Py4a0M5lLgqK5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/64df0922-88c4-45d0-9b1b-be74973576a9.png"},"1a81da15-63a9-4f0b-865d-633bad350825":{"name":"Lever","sourceUrl":null,"frameSize":{"x":40,"y":60},"frameCount":15,"looping":false,"frameDelay":1,"version":"U2g3VKI95UhFhZl3kSSg0lpQW3TMppJ3","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":180},"rootRelativePath":"assets/1a81da15-63a9-4f0b-865d-633bad350825.png"},"ee2b9dd1-843e-4591-8360-1127a769631d":{"name":"Rush","sourceUrl":null,"frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"rfiWLtHyja6mI8ID0N.MVsv8etQF_74z","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/ee2b9dd1-843e-4591-8360-1127a769631d.png"},"d86bf7e3-ac6f-49d1-9889-9534dc110fbe":{"name":"Icon_EyesSpawnPos","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":8,"looping":true,"frameDelay":5,"version":"ExeLe5CQhYzhgzZkeM1.ZGova6HKp4VH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/d86bf7e3-ac6f-49d1-9889-9534dc110fbe.png"},"6870045c-9726-4a23-b159-7bce8cba9537":{"name":"player","sourceUrl":null,"frameSize":{"x":310,"y":310},"frameCount":1,"looping":true,"frameDelay":12,"version":"si38z9.6Zdlani8hiXevBrUVjuexs2QJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":310},"rootRelativePath":"assets/6870045c-9726-4a23-b159-7bce8cba9537.png"},"8b330197-0ee6-4bef-a3a2-73d4308f18d7":{"name":"Skull.jpg_1","sourceUrl":null,"frameSize":{"x":323,"y":413},"frameCount":1,"looping":true,"frameDelay":12,"version":"L3gEqjqlqAH3Y9G.t_4XQl0u4B8jzOEB","loadedFromSource":true,"saved":true,"sourceSize":{"x":323,"y":413},"rootRelativePath":"assets/8b330197-0ee6-4bef-a3a2-73d4308f18d7.png"},"a11b788c-4bb7-4a88-bc85-6751ff6600ee":{"name":"EyeJumpscare","sourceUrl":null,"frameSize":{"x":413,"y":413},"frameCount":1,"looping":true,"frameDelay":12,"version":"_QUzt2n9d9K4.D.65GOquX.QhXdkwCPD","loadedFromSource":true,"saved":true,"sourceSize":{"x":413,"y":413},"rootRelativePath":"assets/a11b788c-4bb7-4a88-bc85-6751ff6600ee.png"},"c3c162a6-ab83-4403-a88c-4899bf6b22b7":{"name":"eyes","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":10,"looping":true,"frameDelay":1,"version":"9jcHfBEC20Zeps5MJtROa6f4_rEHmFW8","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/c3c162a6-ab83-4403-a88c-4899bf6b22b7.png"},"1859a863-0ef3-4b00-8ba8-1433044c2dfc":{"name":"seek","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":3,"version":"d8p0q3FFK6N2hwnonpG3qsrUtbVRFT.M","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/1859a863-0ef3-4b00-8ba8-1433044c2dfc.png"},"4fba4b2f-519c-4e16-bee9-4b78f0facbad":{"name":"seekCutscene","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":16,"looping":true,"frameDelay":4,"version":"1oxRbimUFt2CQ9cJupLbBexOriXRKIHm","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/4fba4b2f-519c-4e16-bee9-4b78f0facbad.png"},"8d082b87-e323-41f7-8250-aeeeb6136063":{"name":"bookshelf","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"JP420_C8X35HhW8wKvTKyvRX1_vf_t77","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/8d082b87-e323-41f7-8250-aeeeb6136063.png"},"a134144b-d5b6-4450-8db4-d0d314d1671e":{"name":"bookshelfSpawner","sourceUrl":null,"frameSize":{"x":100,"y":200},"frameCount":25,"looping":true,"frameDelay":1,"version":"MiDhOnZkYVDXIsyAjgZTmYFRdy2Ia14Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":800},"rootRelativePath":"assets/a134144b-d5b6-4450-8db4-d0d314d1671e.png"},"c57d89e2-a0af-4793-a6f9-d7a9c5cb50ce":{"name":"doorSpawner","sourceUrl":null,"frameSize":{"x":100,"y":200},"frameCount":25,"looping":true,"frameDelay":1,"version":"KxPql0WxZj12n8EGyEzsHnJhlEQLKl9Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":800},"rootRelativePath":"assets/c57d89e2-a0af-4793-a6f9-d7a9c5cb50ce.png"},"e0abeef8-0d4e-41bc-b4e0-25e54aab73a9":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":13,"looping":true,"frameDelay":2,"version":"kbArxWNBw.m83Tekp4vYev50EpgbNTMq","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/e0abeef8-0d4e-41bc-b4e0-25e54aab73a9.png"},"827bedb8-d322-4935-ba59-8a3c634f6004":{"name":"win","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"zLCXtt_0R4VdY2id4evIhUzUnkTM.FdU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/827bedb8-d322-4935-ba59-8a3c634f6004.png"},"a30030a0-218f-4dd3-9920-f85b297ed40c":{"name":"Flicker","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":5,"looping":true,"frameDelay":4,"version":"MlEwJjrIVzCJWajf4svKqBQhe5S_cL2w","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":30},"rootRelativePath":"assets/a30030a0-218f-4dd3-9920-f85b297ed40c.png"},"cc35b5ca-5e60-4196-a898-245f59125715":{"name":"Closet_0","sourceUrl":"assets/v3/animations/ebaVseZkUHerhp8Lgd5JNbOp67-csytSnprvNe_Cg8U/cc35b5ca-5e60-4196-a898-245f59125715.png","frameSize":{"x":95,"y":150},"frameCount":1,"looping":true,"frameDelay":4,"version":"L1M.hmUF0K4l55gfIbBtwHWW6fFVAabx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":150},"rootRelativePath":"assets/v3/animations/ebaVseZkUHerhp8Lgd5JNbOp67-csytSnprvNe_Cg8U/cc35b5ca-5e60-4196-a898-245f59125715.png"},"9d3e7ecd-70d9-4042-836a-a933df8dc6cc":{"name":"Destroy","sourceUrl":null,"frameSize":{"x":95,"y":95},"frameCount":20,"looping":true,"frameDelay":1,"version":"rh9HmkoARFJrhHky7atHJSOMhmhRmiFX","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":475},"rootRelativePath":"assets/9d3e7ecd-70d9-4042-836a-a933df8dc6cc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Levels = {
  Generic:[
    [{x:400,y:-200,configID:"WallGreen_Front3"},{x:800,y:0,configID:"Void_Empty_200"},{x:800,y:-200,configID:"Void_Empty_200"},{x:400,y:-400,configID:"Void_Empty_600"},{x:600,y:-400,configID:"Void_Empty_600"},{x:300,y:300,configID:"Void_Empty_400"},{x:800,y:200,configID:"WallGreen_Front"},{x:400,y:800,configID:"Void_Empty_600"},{x:600,y:800,configID:"Void_Empty_600"},{x:250,y:-150,configID:"Closet"},{x:600,y:-150,configID:"Closet"},{x:400,y:-100,configID:"Cabinet"},{x:450,y:-100,configID:"Cabinet"},{x:800,y:400,configID:"NextDoor_Right"},{x:600,y:0,configID:"EyesSpawn"}],
    [{x:400,y:-200,configID:"WallGreen_Front3"},{x:400,y:400,configID:"Void_Empty_600"},{x:410,y:10,configID:"EyesSpawn"},{x:200,y:-150,configID:"Closet"},{x:350,y:-100,configID:"Cabinet"},{x:600,y:0,configID:"NextDoor_Right"}],
    [{x:300,y:-200,configID:"WallGreen_Front2"},{x:800,y:-200,configID:"WallGreen_Front"},{x:600,y:200,configID:"WallGreen_Front"},{x:800,y:200,configID:"Void_Empty_200"},{x:800,y:400,configID:"Void_Empty_200"},{x:600,y:800,configID:"Void_Empty_600"},{x:200,y:200,configID:"Void_Empty_200"},{x:200,y:400,configID:"Void_Empty_200"},{x:200,y:600,configID:"Void_Empty_200"},{x:800,y:-400,configID:"Void_Empty_200"},{x:800,y:-600,configID:"Void_Empty_200"},{x:600,y:-800,configID:"Void_Empty_600"},{x:300,y:-500,configID:"Void_Empty_400"},{x:600,y:-600,configID:"WallGreen_Front"},{x:600,y:-580,configID:"Lever"},{x:600,y:220,configID:"Lever"},{x:600,y:0,configID:"EyesSpawn"},{x:400,y:-150,configID:"Closet"},{x:300,y:-100,configID:"Cabinet"},{x:200,y:-100,configID:"Cabinet"},{x:800,y:0,configID:"NextDoor_Right"}]
    //[{x:0,y:-200,configID:"WallGreen_Front"},{x:200,y:-200,configID:"WallGreen_Front"},{x:400,y:-200,configID:"WallGreen_Front"},{x:0,y:200,configID:"Void_Empty_200"},{x:200,y:200,configID:"Void_Empty_200"},{x:400,y:200,configID:"Void_Empty_200"},{x:400,y:0,configID:"NextDoor_Right"}]
    //[{x:200,y:-400,configID:"WallGreen_Front3"},{x:200,y:600,configID:"Void_Empty_600"},{x:800,y:400,configID:"Void_Empty_600"},{x:800,y:-400,configID:"Void_Empty_600"},{x:600,y:0,configID:"NextDoor_Right"},{x:240,y:-10,configID:"EyesSpawn"}]
    /*[{x:600,y:0,configID:"NextDoor_Right"},{x:600,y:200,configID:"Void_Empty_200"},{x:400,y:200,configID:"Void_Empty_200"},{x:200,y:200,configID:"Void_Empty_200"},{x:400,y:-200,configID:"WallGreen_Front5"},{x:400,y:-150,configID:"Closet"}],
    /*[{x:200,y:-200,configID:"WallGreen_Front"},{x:400,y:-200,configID:"WallGreen_Front"},{x:600,y:-200,configID:"WallGreen_Front"},{x:400,y:400,configID:"Void_Empty_600"},{x:150,y:-100,configID:"Cabinet"},{x:250,y:-100,configID:"Cabinet"},{x:350,y:-100,configID:"Cabinet"},{x:450,y:-100,configID:"Cabinet"},{x:550,y:-100,configID:"Cabinet"},{x:650,y:-100,configID:"Cabinet"},{x:150,y:-120,configID:"Key"},{x:250,y:-120,configID:"Key"},{x:350,y:-120,configID:"Key"},{x:450,y:-120,configID:"Key"},{x:550,y:-120,configID:"Key"},{x:650,y:-120,configID:"Key"},{x:800,y:-200,configID:"WallGreen_Front"},{x:800,y:200,configID:"Void_Empty_200"},{x:800,y:0,configID:"NextDoor_Right"}],
    [{x:150,y:-170,configID:"Lever"},{x:200,y:-200,configID:"WallGreen_Front"},{x:400,y:-200,configID:"WallGreen_Front"},{x:400,y:0,configID:"NextDoor_Right"}]
    /*[{x:200,y:-200,configID:"WallSGreen_Front"},{x:400,y:-200,configID:"WallGreen_Front"},{x:600,y:-200,configID:"WallGreen_Front"},{x:200,y:200,configID:"Void_Empty_200"},{x:400,y:200,configID:"Void_Empty_200"},{x:600,y:200,configID:"Void_Empty_200"},{x:600,y:0,configID:"NextDoor_Right"}],
[{x:0,y:-200,configID:"WallGreen_Front"},{x:200,y:-200,configID:"WallGreen_Front"},{x:0,y:200,configID:"Void_Empty_200"},{x:400,y:-200,configID:"Void_Empty_200"},{x:400,y:0,configID:"WallGreen_Front"},{x:400,y:200,configID:"NextDoor_Right"},{x:50,y:-150,configID:"Closet"},{x:250,y:-150,configID:"Closet"},{x:400,y:400,configID:"Void_Empty_200"},{x:200,y:400,configID:"Void_Empty_200"},{x:0,y:400,configID:"Void_Empty_200"}],
[{x:200,y:-200,configID:"WallGreen_Front"},{x:200,y:200,configID:"Void_Empty_200"},{x:400,y:200,configID:"Void_Empty_200"},{x:600,y:200,configID:"Void_Empty_200"},{x:600,y:0,configID:"Void_Empty_200"},{x:600,y:-200,configID:"Void_Empty_200"},{x:200,y:-400,configID:"Void_Empty_200"},{x:600,y:-400,configID:"Void_Empty_200"},{x:200,y:-600,configID:"Void_Empty_200"},{x:200,y:-800,configID:"Void_Empty_200"},{x:400,y:-800,configID:"WallGreen_Front"},{x:600,y:-800,configID:"WallGreen_Front"},{x:350,y:-700,configID:"Cabinet"},{x:450,y:-700,configID:"Cabinet"},{x:250,y:-150,configID:"Closet"},{x:600,y:-600,configID:"NextDoor_Right"}],
[{x:0,y:-200,configID:"WallGreen_Front"},{x:400,y:-200,configID:"WallGreen_Front"},{x:200,y:-200,configID:"WallGreen_Window"},{x:200,y:-200,configID:"Void_Rain_200"},{x:200,y:200,configID:"Void_Empty_200"},{x:400,y:200,configID:"Void_Empty_200"},{x:600,y:200,configID:"Void_Empty_200"},{x:800,y:0,configID:"Void_Empty_200"},{x:800,y:200,configID:"Void_Empty_200"},{x:800,y:-200,configID:"Void_Empty_200"},{x:0,y:200,configID:"Void_Empty_200"},{x:400,y:-400,configID:"WallGreen_Window"},{x:400,y:-400,configID:"Void_Rain_200"},{x:800,y:-400,configID:"Void_Empty_200"},{x:1000,y:-400,configID:"Void_Empty_200"},{x:400,y:-600,configID:"WallGreen_Front"},{x:400,y:-800,configID:"WallGreen_Front"},{x:600,y:-800,configID:"WallGreen_Front"},{x:800,y:-800,configID:"WallGreen_Front"},{x:1000,y:-800,configID:"WallGreen_Front"},{x:1000,y:-600,configID:"NextDoor_Right"},{x:400,y:-150,configID:"Closet"},{x:50,y:-150,configID:"Closet"},{x:600,y:-750,configID:"Closet"},{x:800,y:-750,configID:"Closet"}],*/
  ],
  Seek:[[{x:0,y:-200,configID:"WallRed_Front"},{x:200,y:-200,configID:"WallRed_Window2"},{x:600,y:-200,configID:"WallRed_Window2"},{x:1000,y:-200,configID:"WallRed_Window2"},{x:800,y:-200,configID:"WallRed_Front"},{x:400,y:-200,configID:"WallRed_Front"},{x:1200,y:-200,configID:"WallRed_Front"},{x:1000,y:400,configID:"Void_Empty_600"},{x:200,y:400,configID:"Void_Empty_600"},{x:600,y:400,configID:"Void_Empty_600"},{x:1200,y:0,configID:"NextDoor_Right"},{x:100,y:-50,configID:"Seek_Cutscene"}],
  [{x:0,y:-200,configID:"WallRed_Front"},{x:200,y:-200,configID:"WallRed_Front"},{x:400,y:-200,configID:"WallRed_Front"},{x:600,y:-200,configID:"WallRed_Front"},{x:150,y:0,configID:"Seek_Bookspawn"},{x:400,y:0,configID:"Seek_Bookspawn"},{x:600,y:0,configID:"NextDoor_Right"},{x:400,y:400,configID:"Void_Empty_600"},{x:200,y:400,configID:"Void_Empty_600"}],
  [{x:0,y:-200,configID:"WallRed_Front"},{x:200,y:-400,configID:"WallRed_Front"},{x:400,y:-400,configID:"WallRed_Front"},{x:600,y:-400,configID:"WallRed_Front"},{x:600,y:0,configID:"WallRed_Front"},{x:400,y:0,configID:"WallRed_Front"},{x:400,y:600,configID:"Void_Empty_600"},{x:400,y:-600,configID:"Void_Empty_600"},{x:200,y:-600,configID:"Void_Empty_600"},{x:0,y:200,configID:"Void_Empty_200"},{x:0,y:400,configID:"Void_Empty_200"},{x:600,y:0,configID:"Seek_Doorspawn"}],
  [{x:0,y:-200,configID:"WallRed_Front"},{x:200,y:-200,configID:"WallRed_Front"},{x:400,y:-200,configID:"WallRed_Front"},{x:600,y:-200,configID:"WallRed_Front"},{x:150,y:0,configID:"Seek_Bookspawn"},{x:400,y:0,configID:"Seek_Bookspawn"},{x:600,y:0,configID:"NextDoor_Right"},{x:400,y:400,configID:"Void_Empty_600"},{x:200,y:400,configID:"Void_Empty_600"}],
  [{x:0,y:-200,configID:"WallRed_Front"},{x:200,y:-400,configID:"WallRed_Front"},{x:400,y:-400,configID:"WallRed_Front"},{x:600,y:-400,configID:"WallRed_Front"},{x:600,y:0,configID:"WallRed_Front"},{x:400,y:0,configID:"WallRed_Front"},{x:400,y:600,configID:"Void_Empty_600"},{x:400,y:-600,configID:"Void_Empty_600"},{x:200,y:-600,configID:"Void_Empty_600"},{x:0,y:200,configID:"Void_Empty_200"},{x:0,y:400,configID:"Void_Empty_200"},{x:600,y:0,configID:"Seek_Doorspawn"}]],
  Figure50:[],
  Figure100:[],
  Tutorial:[[{x:200,y:-200,configID:"WallGreen_Front3"},{x:-400,y:0,configID:"Void_Empty_600"},{x:-400,y:600,configID:"Void_Empty_600"},{x:200,y:800,configID:"Void_Empty_600"},{x:600,y:-200,configID:"Void_Empty_200"},{x:600,y:0,configID:"Void_Empty_200"},{x:600,y:200,configID:"Void_Empty_200"},{x:600,y:600,configID:"Void_Empty_200"},{x:600,y:400,configID:"NextDoor_Right"},{x:400,y:-100,configID:"Cabinet"},{x:450,y:-100,configID:"Cabinet"},{x:200,y:-100,configID:"Cabinet"},{x:150,y:-100,configID:"Cabinet"},{x:450,y:-120,configID:"Key"}]]
};
var LE_LvlObjSelectNames = [
  ["WallGreen_Front","WallGreen_Front2","WallGreen_Front3","WallGreen_Front4","WallGreen_Front5"],
  ["WallGreen_Window"],
  ["WallRed_Front"],
  ["WallRed_Window","WallRed_Window2"],
  ["Void_Empty_200","Void_Empty_400","Void_Empty_600"],
  ["Void_Rain_200"],
  ["NextDoor_Right"],
  ["Closet",
  "Cabinet"],
  ["Key","Lever"],
  ["EyesSpawn"],
  ["Seek_Bookspawn","Seek_Doorspawn","Seek_Cutscene"]
];
var LvlObjects = {//collider:{off:{x:0,y:0},size:{x:200,y:200,r:0},circle:false}
  "WallGreen_Front":{id:"WallGreen_Front",scale:2,
    anim:"MansionWall100px",
    tint:"#10AA33",
    gridSnapSize:200,
    collider:{off:{x:0,y:25},size:{x:100,y:50,r:0},circle:false}
  },
  "WallGreen_Front2":{id:"WallGreen_Front2",scale:2,
    anim:"MansionWall100px2",
    tint:"#10AA33",
    gridSnapSize:100,
    collider:{off:{x:0,y:25},size:{x:200,y:50,r:0},circle:false}
  },
  "WallGreen_Front3":{id:"WallGreen_Front3",scale:2,
    anim:"MansionWall100px3",
    tint:"#10AA33",
    gridSnapSize:200,
    collider:{off:{x:0,y:25},size:{x:300,y:50,r:0},circle:false}
  },
  "WallGreen_Front4":{id:"WallGreen_Front4",scale:2,
    anim:"MansionWall100px4",
    tint:"#10AA33",
    gridSnapSize:100,
    collider:{off:{x:0,y:25},size:{x:400,y:50,r:0},circle:false}
  },
  "WallGreen_Front5":{id:"WallGreen_Front5",scale:2,
    anim:"MansionWall100px5",
    tint:"#10AA33",
    gridSnapSize:200,
    collider:{off:{x:0,y:25},size:{x:500,y:50,r:0},circle:false}
  },
  /*"WallGreen_Front":{id:"WallGreen_Front",scale:1,
    anim:"MansionWall50px",
    tint:"#10AA33",
    gridSnapSize:200,
    collider:{off:{x:0,y:50},size:{x:200,y:100,r:0},circle:false}
  },*/
  "WallGreen_Window":{id:"WallGreen_Window",
    anim:"gatewaysMansionWallWindow",
    tint:"#10AA33",
    gridSnapSize:200,
    collider:{off:{x:0,y:50},size:{x:200,y:100,r:0},circle:false}
  },
  "WallRed_Front":{id:"WallRed_Front",
    anim:"gatewaysMansionWall.jpg_1",
    tint:"#AA1144",
    gridSnapSize:200,
    collider:{off:{x:0,y:50},size:{x:200,y:100,r:0},circle:false}
  },
  "WallRed_Window":{id:"WallRed_Window",
    anim:"seekWindow",
    tint:"#AA1144",
    gridSnapSize:100,
    collider:{off:{x:0,y:50},size:{x:200,y:100,r:0},circle:false}
  },
  "WallRed_Window2":{id:"WallRed_Window2",
    anim:"seekWindow2",
    tint:"#AA1144",
    gridSnapSize:100,
    collider:{off:{x:0,y:50},size:{x:200,y:100,r:0},circle:false}
  },
  "Void_Empty_200":{id:"Void_Empty_200",scale:100,
    anim:"OutOfBounds2",
    tint:"#000000",
    gridSnapSize:200,
    collider:{off:{x:0,y:0},size:{x:2,y:2,r:0},circle:false}
  },
  "Void_Empty_400":{id:"Void_Empty_400",scale:200,
    anim:"OutOfBounds2",
    tint:"#000000",
    gridSnapSize:100,
    collider:{off:{x:0,y:0},size:{x:2,y:2,r:0},circle:false}
  },
  "Void_Empty_600":{id:"Void_Empty_600",scale:300,
    anim:"OutOfBounds2",
    tint:"#000000",
    gridSnapSize:200,
    collider:{off:{x:0,y:0},size:{x:2,y:2,r:0},circle:false}
  },
  "Void_Rain_200":{id:"Void_Rain_200",animatedTile:true,
    anim:"OutOfBounds200Rain",
    tint:"#FFFFFF",
    gridSnapSize:200,
    depthOffset:-210,
    collider:{off:{x:0,y:0},size:{x:0,y:0,r:0},circle:false}
  },
  "NextDoor_Right":{id:"NextDoor_Right",
    anim:"door_right",
    tint:"#FFFFFF",
    gridSnapSize:200,
    collider:{off:{x:0,y:0},size:{x:0,y:200,r:0},circle:false}
  },
  "Closet":{id:"Closet",interactable:true,
    anim:"Closet_0",
    tint:"#FFFFFE",
    gridSnapSize:50,
    collider:{off:{x:0,y:0},size:{x:0,y:10,r:0},circle:false}
  },
  "Cabinet":{id:"Cabinet",interactable:true,
    anim:"cabinet.jpg_1",
    tint:"#FEFFFE",
    gridSnapSize:50,
    collider:{off:{x:0,y:0},size:{x:0,y:0,r:30},circle:true}
  },
  "Key":{id:"Key",key:true,
    anim:"key.jpg_1",
    tint:"#FFFFFF",
    gridSnapSize:10,
    collider:{off:{x:0,y:0},size:{x:0,y:10,r:0},circle:false},
    depthOffset:20
  },
  "Lever":{id:"Lever",key:true,
    anim:"Lever",
    tint:"#FFFFFF",
    gridSnapSize:10,
    collider:{off:{x:0,y:0},size:{x:0,y:10,r:0},circle:false},
    depthOffset:20
  },
  "EyesSpawn":{id:"EyesSpawn",animatedTile:true,
    anim:"Icon_EyesSpawnPos",
    tint:"#FFFFFF",
    gridSnapSize:10,
    collider:{off:{x:0,y:0},size:{x:0,y:0,r:0},circle:false},
    depthOffset:999999
  },
  "Seek_Bookspawn":{
    id:"Seek_Bookspawn",animatedTile:true,
    anim:"bookshelfSpawner",
    tint:"#FFFFFF",
    gridSnapSize:50,
    collider:{off:{x:0,y:0},size:{x:0,y:0,r:0},circle:false},
    depthOffset:999999
  },
  "Seek_Doorspawn":{
    id:"Seek_Doorspawn",animatedTile:true,scale:4,
    anim:"doorSpawner",
    tint:"#FFFFFF",
    gridSnapSize:50,
    collider:{off:{x:0,y:0},size:{x:0,y:0,r:0},circle:false},
    depthOffset:999999
  },
  "Seek_Books":{
    id:"Seek_Books",animatedTile:true,scale:0.5,
    anim:"bookshelf",
    tint:"#FFFFFF",
    gridSnapSize:50,
    collider:{off:{x:0,y:0},size:{x:200,y:200,r:0},circle:false},
    depthOffset:0
  },
  "Seek_Cutscene":{
    id:"Seek_Cutscene",animatedTile:true,scale:1,
    anim:"seekCutscene",
    tint:"#FFFFFF",
    gridSnapSize:50,
    collider:{off:{x:500,y:900},size:{x:200,y:200,r:0},circle:false},
    depthOffset:0
  },
  "VFX_SeekIndicator":{
    id:"VFX_SeekIndicator",animatedTile:true,lifetime:25,
    anim:"animation_2",
    tint:"#AAFFAA",
    gridSnapSize:50,
    collider:{off:{x:9999,y:900},size:{x:0,y:0,r:0},circle:false},
    depthOffset:0
  }
};
var currentRoom = 1;
var seekRoom = 15; //randomNumber(30,40);
var seekProgress = 0;

function entityWeights(rInt)  {
  var returnValue = null;
  if (rInt <= 35) {returnValue = "Eyes";}
  if (rInt <= 20) {returnValue = "Rush";}
  return returnValue;
}
var Rush = createSprite(-5000,0);
Rush.setAnimation("Destroy");
Rush.scale = 3;
Rush.setCollider("circle",0,0,80);
Rush.velocityX = 0;
var Eyes = createSprite(-5000,0);
Eyes.setAnimation("eyes");
var Seek = createSprite(-5000,0);
Seek.setAnimation("seek");
Seek.velocityX = 0;

var cutscene = null;
var cutsceneActive = false;
var damageShake = 0;

var currentEntity = "None";
var Entities = {
  "Rush":Rush,
};
// Create your variables here
var player = createSprite(0,0);
player.setAnimation("player");
player.scale = 0.5;
player.depth = 100;
player.setCollider("rectangle",0,50,100,30);
var player_Speed = 1.3;//1.3;
var floorBG = createSprite(0,0);
floorBG.depth = -100000;
floorBG.setAnimation("tiledWoodlow");
floorBG.scale = 2;
var flicker = null;
var currentCloset = null;
var bInEditor = false;

var camOffsetx = 0;
var camOffsety = 0;

var health = 100;

var dead = false;
var deathT = 0;
var skull = createSprite(-1000,0);
skull.setAnimation("Skull.jpg_1");

var currentItem = {
  id:"Flashlight",
  toggled:false,
  amount:4000
};

var roomType = "Normal";
//var Overlay_Vignette = createSprite(0,0);
//Overlay_Vignette.setAnimation("DarkRoomOverlay");
//Overlay_Vignette.depth = 1000000000000;
var LoadedRooms = [createGroup()];
var LE_CurrentRoom = [];
var LE_ObjPrev = createSprite(-5000,0);
var LE_ObjPrevConfig = LvlObjects.WallGreen_Front;
var LE_ObjRow = 0;
var LE_ObjCol = 0;
// Create your sprites here
var NextDoor = null;
var NextKey = null;

World.frameRate = 60;
function loadRoom(roomData,worldX,worldY) {
  var randEntity = entityWeights(randomNumber(1,100));
  var keys = [];
  for (var i=0;i<roomData.length;i++) {
    if (LvlObjects[roomData[i].configID].key!=null) {
      appendItem(keys, [roomData[i],i]);
    }
  }
  var selectedKey = randomNumber(1,keys.length);
  var roomGroup = createGroup();
  var keyCounter = 0;
  var closetInMap = false;
  var eyespawnInMap = false;
  var eyespawnPos = null;
  for (var i=0;i<roomData.length;i++) {
    var data = {
      x:roomData[i].x+worldX,
      y:roomData[i].y+worldY,
      config:LvlObjects[roomData[i].configID]
    };
    var newObject = roomObjectSprite(data);
    if (data.config.id == "NextDoor_Right") {
      NextDoor = newObject;
      roomGroup.add(newObject);
    }
    else if (data.config.key!=null) {
      keyCounter++;
      if (keyCounter==selectedKey) {
        NextKey = newObject;
        roomGroup.add(newObject);
      }
      else {
        newObject.destroy();
      }
    }
    else if (data.config.id == "EyesSpawn") {
      eyespawnInMap = true;
      eyespawnPos = {x:newObject.x,y:newObject.y};
      newObject.destroy();
    }
    else if (data.config.id == "Closet") {
      roomGroup.add(newObject);
      closetInMap = true;
    }
    else if (data.config.id == "Seek_Bookspawn") {
      var newerData = {
        x:roomData[i].x+worldX,
        y:roomData[i].y+worldY-50+(randomNumber(0,1)*100),
        config:LvlObjects["Seek_Books"]
      };
      var newerObject = roomObjectSprite(newerData)
      newObject.destroy();
      roomGroup.add(newerObject);
    }
    else if (data.config.id == "Seek_Doorspawn") {
      var rand = randomNumber(0,1)
      var doorData = {
        x:roomData[i].x+worldX,
        y:roomData[i].y+worldY-200+(rand*400),
        config:LvlObjects["NextDoor_Right"]
      };
      var wallData = {
        x:roomData[i].x+worldX+200,
        y:roomData[i].y+worldY+200+(rand*-400),
        config:LvlObjects["Void_Empty_200"]
      };
      var vfxData = {
        x:roomData[i].x+worldX-400,
        y:roomData[i].y+worldY-200+(rand*400),
        config:LvlObjects["VFX_SeekIndicator"]
      };
      var Door = roomObjectSprite(doorData);
      var Wall = roomObjectSprite(wallData);
      var VFX = roomObjectSprite(vfxData);
      newObject.destroy();
      NextDoor = Door;
      roomGroup.add(Door);
      roomGroup.add(Wall);
      roomGroup.add(VFX);
    }
    else if (data.config.id == "Seek_Cutscene") {
      newObject.destroy();
      print(cutscene);
      cutscene = roomObjectSprite(data);
      print(cutscene);
      cutscene.pause();
      roomGroup.add(cutscene);
    }
    else {
      roomGroup.add(newObject);
    }
  }
  if (LoadedRooms.length > 1) {
    LoadedRooms[LoadedRooms.length-1].destroyEach();
    removeItem(LoadedRooms,LoadedRooms.length-1);
  }
  insertItem(LoadedRooms,0,roomGroup);
  if (randEntity=="Rush") {
    if (closetInMap==true) {
      flicker = createSprite(camera.x,camera.y);
      flicker.lifetime = 30;
      flicker.scale = 999999999999;
      flicker.setAnimation("Flicker");
      flicker.depth = 99999999999;
      currentEntity = "Rush";
      Rush.depth = 9999;
      Rush.x = camera.x - 2000;
      Rush.y = camera.y;
      Rush.velocityX = 20;
    }
  }
  if (randEntity=="Eyes") {
    if (eyespawnInMap){
      currentEntity = "Eyes";
      Eyes.x = eyespawnPos.x;
      Eyes.y = eyespawnPos.y;
      playSound("assets/category_pop/echo_alert.mp3");
    }
  }
  else {
    if (currentEntity=="Eyes") {currentEntity = "None";}
  }
  //console.log(LoadedRooms);
}
loadRoom(Levels.Tutorial[0],0,0);
function roomObjectSprite(sdata) {
  var newObject = createSprite(sdata.x,sdata.y);
  newObject.setAnimation(sdata.config.anim);
  newObject.tint = sdata.config.tint;
  newObject.depth = newObject.y;
  if (sdata.config.depthOffset != null) {
    newObject.depth += sdata.config.depthOffset;
  }
  if (sdata.config.scale != null) {
    newObject.scale = sdata.config.scale;
  }
  newObject.setFrame(0);
  if (sdata.config.animatedTile == null) {
    newObject.pause();
  }
  if (sdata.config.lifetime != null) {
    newObject.lifetime = sdata.config.lifetime;
  }
  if (sdata.config.collider.circle) {newObject.setCollider("circle",sdata.config.collider.off.x,sdata.config.collider.off.y,sdata.config.collider.size.r);}
  else {newObject.setCollider("rectangle",sdata.config.collider.off.x,sdata.config.collider.off.y,sdata.config.collider.size.x,sdata.config.collider.size.y,sdata.config.collider.size.r);}
  return newObject;
}

function deathScreen() {
  deathT++;
  var temp = Math.min(deathT*0.04,1)
  var temp2 = Math.min(deathT*0.04,1.5);
  background("black");
  camera.x = -1000+randomNumber(50*cos(temp2*180),-50*cos(temp2*180));
  camera.y = 0+randomNumber(50*cos(temp2*180),-50*cos(temp2*180));
  skull.scale = (0.7*temp)+Math.pow(sin(40+temp*140),2);
  drawSprites();
}

function draw() {
  if (dead) {deathScreen();}
  else {
  // draw background
  background("black");
  // update sprites
  proceduralRooms();
  player.depth = player.y;
  floorTiling();
  if (keyDown("shift") && keyWentDown("l")) {
    bInEditor = !bInEditor;
    LE_ObjPrev.visible = bInEditor;
  }
  if (bInEditor) {
    LE_Tick();}
  else {//something
  Interaction();
  CutsceneTick();
  }
  //Overlays();
  //wallAlpha();
  drawSprites();
  GUI();
  movement();
  EntityTick();}
}

function Interaction() {
  camera.zoom = lerp(camera.zoom,1.1,0.03);
  if (mouseWentDown("leftButton")) {
    var ignoreOrder = 0;
    if (NextKey!=null) {
      if (length2D(NextKey.x-camera.mouseX,NextKey.y-camera.mouseY)<20) {
        ignoreOrder = 1;
        NextKey.play();
        NextKey = null;
        playSound("assets/category_slide/puzzle_game_organic_hinge_turn_1.mp3");
      }
    }
    if (ignoreOrder==0) {
      for (var i=0;i<LoadedRooms[0].length;i++) {
        if (LoadedRooms[0][i].tint == "#FEFFFE") {
          if (length2D(LoadedRooms[0][i].x-camera.mouseX,LoadedRooms[0][i].y-camera.mouseY)<20) {
            health = Math.min(100,health+10);
            //console.log(LoadedRooms[0][i]);
            LoadedRooms[0][i].tint = "#FFFFFF";
            LoadedRooms[0][i].nextFrame();
            playSound( "assets/category_slide/animation_whoosh2.mp3");
          }
        }
        else if (LoadedRooms[0][i].tint == "#FFFFFE") {
          if (length2D((LoadedRooms[0][i].x-camera.mouseX)*2,LoadedRooms[0][i].y-camera.mouseY)<100) {
            player.visible = !player.visible;
            if (player.visible) {
              currentCloset = null;
            }
            else {
              currentCloset = LoadedRooms[0][i];
            }
            playSound( "assets/category_slide/animation_whoosh2.mp3");
          }
        }
      }
    }
  }
}

function EntityTick() {
  if (currentEntity=="Rush") {
    if (currentCloset==null){
    if (player.isTouching(Rush)) {
      skull.setAnimation("Destroy");
      dead=true;
    }
    }
    if (Rush.x>camera.x+500) {
      Rush.x = -9999;
      Rush.velocityX = 0;
      currentEntity=="Null";
    }
  }
  else if (currentEntity=="Eyes") {
    var eyeDir = normalize(player.x-Eyes.x,player.y-Eyes.y);
    var cursorDir = normalize(player.x-camera.mouseX,player.y-camera.mouseY);
    if (length2D(eyeDir.x-cursorDir.x,eyeDir.y-cursorDir.y)<1.2&&length2D(Eyes.x-player.x,Eyes.y-player.y)<190) {
      damageShake = lerp(damageShake,50,0.5);
      damagePlayer(1);
      playSound("assets/category_hits/retro_game_simple_impact_1.mp3");
    }
  }
  else if (currentEntity=="Seek") {
    Seek.y = lerp(Seek.y,player.y,0.05);
    if (player.x-50<Seek.x) {
      skull.setAnimation("EyeJumpscare");
      dead=true;
    }
  }
}

function CutsceneTick() {
  if (cutsceneActive) {
    camera.x = lerp(cutscene.x,camera.x,0.9);
    camera.y = lerp(cutscene.y,camera.y,0.9);
    if (cutscene.lifetime == 1) {
      Seek.x = cutscene.x;
      Seek.y = cutscene.y;
      Seek.velocityX = 6;
      currentEntity = "Seek";
      player_Speed = 2;
      cutscene = null;
      cutsceneActive = false;
    }
  }
  else {
    print('hi');
    if (cutscene != null) {
      if (cutscene != true){
      if (cutscene.x+700<player.x) {
        cutscene.play();
        cutscene.setFrame(0);
        cutscene.lifetime = 60;
        cutsceneActive = true;
      }
      }
    }
  }
}

// Create your functions here

function GUIX(x) {return camera.x+(x/camera.zoom);}
function GUIY(y) {return camera.y+(y/camera.zoom);}
function GUI() {
  noStroke();
  fill(rgb(80, 55, 0));
  rect(GUIX(-190),GUIY(160),150,30);
  fill(rgb(230, 200, 130));
  rect(GUIX(-187),GUIY(163),health*1.44,24);
}
function Overlays(){
  /*Overlay_Vignette.x = camera.x;
  Overlay_Vignette.y = camera.y;
  Overlay_Vignette.scale = 2;
  if (roomType=="Dark") {
    if (currentItem.id=="Flashlight") {
      Overlay_Vignette.setFrame(2);
      Overlay_Vignette.rotation = atan2(World.mouseX-200,World.mouseY-200)*-1;
    }
    else {
      Overlay_Vignette.setFrame(1);
      Overlay_Vignette.rotation +=75;
    }
  }
  else {
    Overlay_Vignette.setFrame(0);
  }*/
}
function inputAxis (p,n) {
    var retVal = 0;
    if (keyDown(n)) {retVal--;}
    if (keyDown(p)) {retVal++;}
    return retVal;
}
function movement() {
  player.velocityX += inputAxis("d","a")*player_Speed;
  player.velocityY += inputAxis("s","w")*player_Speed;
  if (currentCloset == null){
  if (player.collide(LoadedRooms[0])) {
    player.y++;
    if (player.overlap(LoadedRooms[0])) {
      player.y-=2;
    }
  }}
  else {
    player.x = lerp(player.x,currentCloset.x,0.1);
    player.y = lerp(player.y,currentCloset.y+50,0.1);
  }
  player.velocityX *= 0.8;
  player.velocityY *= 0.8;
  camOffsetx = lerp(camOffsetx,(Seek.velocityX*5)+((World.mouseX-200)*0.1)-max(player.x-NextDoor.x,-100)-100,0.1);
  camOffsety = lerp(camOffsety,(World.mouseY-200)*0.1,0.1);
  if (!cutsceneActive){
  damageShake += 100/Math.abs(player.x-Seek.x);
  damageShake += 100/Math.abs(player.x-Rush.x);
  camera.x = player.x+camOffsetx+(randomNumber(-1000,1000)*damageShake*0.001);
  camera.y = player.y+camOffsety+(randomNumber(-1000,1000)*damageShake*0.001);}
  damageShake *= 0.9;
}
function proceduralRooms() {
  if (NextKey == null) {
    if (NextDoor.isTouching(player)) {
      currentRoom++;
      var nextPos = {x:NextDoor.x,y:NextDoor.y};
      NextDoor.destroy();
      if (currentEntity == "Seek") {
        camera.zoom -= 0.2;
        seekProgress++;
        if (seekProgress == 5) {dead = true;skull.setAnimation("win");}
        else {
        loadRoom(Levels.Seek[seekProgress], nextPos.x, nextPos.y);}
      }
      else if (currentRoom==seekRoom)  {
        loadRoom(Levels.Seek[0],nextPos.x,nextPos.y);
      }
      else {
      loadRoom(Levels.Generic[randomNumber(0,Levels.Generic.length-1)], nextPos.x, nextPos.y);}
    }
    NextDoor.setFrame(0);
  }
  else {
    NextDoor.setFrame(1);
  }
}
function wallAlpha() {
  for (var i=0;i<LoadedRooms[0].length;i++) {
    if (LoadedRooms[0][i].depth>player.depth&&LoadedRooms[0][i].depth-300<player.depth&&Math.abs(player.x-LoadedRooms[0][i].x)<300) {
      LoadedRooms[0][i].alpha = 0.2;
    } else {LoadedRooms[0][i].alpha = 1;}
  }
}
function floorTiling() {
  floorBG.x = round(camera.x/400)*400;
  floorBG.y = round(camera.y/400)*400;
}
function LE_Tick() {
  function getIndexList(list,item,inc,inc2) {
    var indexOfObject = -1;
    for (var i=0;i<list.length;i++) {
      if (list[i]==item) {
        indexOfObject = i;
      }
    }
    indexOfObject+=inc;
    if (indexOfObject<0){
      indexOfObject=list.length-1;
    }
    else if (indexOfObject == list.length) {
      indexOfObject = 0;
    }
    return indexOfObject;
  }
  function GetObjectAtOffset(inc,col) {
    if (col) {
      LE_ObjCol += inc;
      LE_ObjCol = (LE_ObjCol+LE_LvlObjSelectNames[LE_ObjRow].length)%LE_LvlObjSelectNames[LE_ObjRow].length;
      console.log(LE_ObjCol);
      LE_ObjPrevConfig = LvlObjects[LE_LvlObjSelectNames[LE_ObjRow][LE_ObjCol]];
    }
    else {
      LE_ObjRow+=inc;
      LE_ObjCol=0;
      LE_ObjRow=(LE_ObjRow+LE_LvlObjSelectNames.length)%LE_LvlObjSelectNames.length;
      console.log(LE_ObjRow);
      LE_ObjPrevConfig = LvlObjects[LE_LvlObjSelectNames[LE_ObjRow][LE_ObjCol]];
    }
  }
  if (keyWentDown("comma")) {
    var object = prompt("Search Object");
    LE_ObjPrevConfig = LvlObjects[object];
  }
  if (keyWentDown("2")) {
    GetObjectAtOffset(1,false);
    //LE_ObjPrevConfig = LvlObjects[LE_LvlObjSelectNames[getIndexList(LE_LvlObjSelectNames,LE_ObjPrevConfig.id,1)]];
  }
  if (keyWentDown("1")) {
    GetObjectAtOffset(-1,false);
    //LE_ObjPrevConfig = LvlObjects[LE_LvlObjSelectNames[getIndexList(LE_LvlObjSelectNames,LE_ObjPrevConfig.id,-1)]];
  }
  if (keyWentDown("n")) {
    GetObjectAtOffset(-1,true);
  }
  if (keyWentDown("m")) {
    GetObjectAtOffset(1,true);
  }
  if (keyWentDown("3")) {
    camera.zoom -= 0.1;
  }
  if (keyWentDown("4")) {
    camera.zoom += 0.1;
  }
  LE_ObjPrev.setAnimation(LE_ObjPrevConfig.anim);
  LE_ObjPrev.tint = LE_ObjPrevConfig.tint;
  LE_ObjPrev.alpha = lerp(Math.abs(sin(getTime()/3)),0.7,0.9);
  LE_ObjPrev.x = Math.round(GUIX(World.mouseX-200)/LE_ObjPrevConfig.gridSnapSize)*LE_ObjPrevConfig.gridSnapSize;
  LE_ObjPrev.y = Math.round(GUIY(World.mouseY-200)/LE_ObjPrevConfig.gridSnapSize)*LE_ObjPrevConfig.gridSnapSize;
  LE_ObjPrev.depth = LE_ObjPrev.y;
  if (LE_ObjPrevConfig.scale != null) {
    LE_ObjPrev.scale = LE_ObjPrevConfig.scale;
  }
  else {
    LE_ObjPrev.scale = 1;
  }
  LE_ObjPrev.scale *= lerp(Math.abs(sin(getTime()/3)),1,0.9);
  if (mouseWentDown()) {
    var data = {
      x:LE_ObjPrev.x,
      y:LE_ObjPrev.y,
      config:LE_ObjPrevConfig
    };
    appendItem(LE_CurrentRoom,data);
    LE_RebuildRoom();
  }
  if (keyWentDown("r")) {
    var canRemove = true;
    for (var i=0;i<LE_CurrentRoom.length;i++) {
      if (canRemove) {
        if (Math.abs(LE_CurrentRoom[i].x-camera.mouseX)<50&&Math.abs(LE_CurrentRoom[i].y-camera.mouseY)<50) {
          canRemove=false;
          removeItem(LE_CurrentRoom,i);
        }
      }
    }
    if (!canRemove) {
      LE_RebuildRoom();
    }
  }
  if (keyWentUp("s")&&keyDown("shift")) {
    var savedMap = "[";
    for (var i=0;i<LE_CurrentRoom.length;i++) {
      if (savedMap!="[") {savedMap+=",";}
      savedMap +=
      "{x:"+LE_CurrentRoom[i].x+
      ",y:"+LE_CurrentRoom[i].y+
      ",configID:\""+LE_CurrentRoom[i].config.id+"\"}";
    } savedMap+="]";
    //console.log(savedMap);
    prompt(savedMap);
  }
}
function LE_RebuildRoom() {
  LoadedRooms[0].destroyEach();
  for (var i=0;i<LE_CurrentRoom.length;i++) {
    LoadedRooms[0].add(roomObjectSprite(LE_CurrentRoom[i]));
  }
}
function damagePlayer(hp) {
  health-=hp;
  if (health<0) {
    dead=true;
  }
}
function length2D(x,y) {
  return Math.sqrt((x*x)+(y*y));
}
function normalize(x,y) {
  var v = {x:x/length2D(x,y),y:y/length2D(x,y)};
  return v;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
